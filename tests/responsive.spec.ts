import { test, expect } from "@playwright/test"

// DELURE design-system breakpoint matrix.
const breakpoints = [
  { name: "Mobile Compact", width: 320, height: 760 },
  { name: "Mobile Standard", width: 390, height: 844 },
  { name: "Phablet", width: 428, height: 926 },
  { name: "Tablet Portrait", width: 768, height: 1024 },
  { name: "Tablet Landscape", width: 1024, height: 768 },
  { name: "Desktop Standard", width: 1440, height: 900 },
  { name: "Ultra-Wide / 4K", width: 2560, height: 1440 },
]

// Measures the Hero split: column count, stacking order, and whether the
// content block or the title overlaps the image (text creeping onto the photo).
function probeHero() {
  const sec = document.querySelector("main section") as HTMLElement
  const cols = getComputedStyle(sec).gridTemplateColumns.split(" ").filter(Boolean).length
  const kids = [...sec.children] as HTMLElement[]
  const content = kids[0].getBoundingClientRect()
  const image = kids[1].getBoundingClientRect()
  const blocksOverlap =
    content.left < image.right && image.left < content.right &&
    content.top < image.bottom && image.top < content.bottom
  const h1 = sec.querySelector("h1")!.getBoundingClientRect()
  const titleOverImage =
    h1.left < image.right && image.left < h1.right &&
    h1.top < image.bottom && image.top < h1.bottom
  const nonWebp = [...document.querySelectorAll("img")]
    .map((i) => i.currentSrc || i.src)
    .filter((s) => /\.(png|jpe?g)(\?|$)/i.test(s))
  return {
    w: window.innerWidth,
    layout: cols >= 2 ? "two-column" : "single-column",
    contentAboveImage: content.bottom <= image.top + 1,
    sideBySide: content.right <= image.left + 1,
    blocksOverlap,
    titleOverImage,
    nonWebp,
  }
}

for (const bp of breakpoints) {
  test(`hero is balanced and readable @ ${bp.name} (${bp.width}px)`, async ({ page }) => {
    await page.setViewportSize({ width: bp.width, height: bp.height })
    await page.goto("/")
    const r = await page.evaluate(probeHero)

    if (bp.width < 1024) {
      // Below 1024 the split collapses to one column: text on the light
      // substrate above, the bottle image below.
      expect(r.layout).toBe("single-column")
      expect(r.contentAboveImage).toBe(true)
    } else {
      expect(r.layout).toBe("two-column")
      expect(r.sideBySide).toBe(true)
    }

    // No text may ever creep onto the dark image.
    expect(r.blocksOverlap).toBe(false)
    expect(r.titleOverImage).toBe(false)

    // Every rendered raster image must be WebP.
    expect(r.nonWebp).toEqual([])

    await page.screenshot({ path: `tests/screenshots/hero-${bp.width}.png` })
  })
}
