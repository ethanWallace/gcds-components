
import { test as base, type Page } from '@playwright/test';

import path from 'path';

/**
 * Explicitly load all fonts used by GCDS before taking visual screenshots.
 */
const waitForFonts = async (page: Page) => {
  // Font families, weights and styles declared in all-fonts.css
  const fonts = [
    // GCDS Icons
    'normal 16px "gcds-icons"',

    // Lato
    '700 16px "Lato"',
    'italic 700 16px "Lato"',

    // Noto Sans
    '300 16px "Noto Sans"',
    '400 16px "Noto Sans"',
    '500 16px "Noto Sans"',
    '600 16px "Noto Sans"',
    '700 16px "Noto Sans"',

    // Noto Sans Italic
    'italic 300 16px "Noto Sans"',
    'italic 400 16px "Noto Sans"',
    'italic 500 16px "Noto Sans"',
    'italic 600 16px "Noto Sans"',
    'italic 700 16px "Noto Sans"',

    // Noto Sans Mono
    '400 16px "Noto Sans Mono"',
  ];

  // Explicitly request every font face.
  await Promise.race([
    page.evaluate(async (fontDefinitions) => {
      await Promise.all(
        fontDefinitions.map((font) =>
          document.fonts.load(font, 'Hamburgefontsiv 0123456789'),
        ),
      );

      await document.fonts.ready;

      // Verify that all requested fonts are available.
      const missingFonts = fontDefinitions.filter(
        (font) => !document.fonts.check(font),
      );

      if (missingFonts.length > 0) {
        throw new Error(
          `The following fonts failed to load: ${missingFonts.join(', ')}`,
        );
      }
    }, fonts),
    page.waitForTimeout(15000).then(() => {
      throw new Error('Timed out waiting for GCDS fonts to load.');
    }),
  ]);

  // Allow the browser to render using the loaded fonts.
  await page.evaluate(
    () =>
      new Promise<void>((resolve) =>
        requestAnimationFrame(() => resolve()),
      ),
  );
};

export const test = base.extend({
  page: async ({ page }: { page: Page }, use, testInfo) => {
    const filePath = testInfo.file;
    const baseFileName = path
      .basename(filePath)
      .replace('.visual.ts', '.visual.html');
    const componentName = path.basename(filePath).replace('.visual.ts', '');

    await page.goto(`/components/${componentName}/test/${baseFileName}`, {
      waitUntil: 'domcontentloaded',
    });

    // Wait for all GCDS components inside the preview regions to hydrate.
    await page.waitForFunction(
      () => {
        const gcdsEls = Array.from(
          document.querySelectorAll('.preview-component *'),
        ).filter(el => el.tagName.toLowerCase().startsWith('gcds-'));

        return (
          gcdsEls.length > 0 &&
          gcdsEls.every(el => el.classList.contains('hydrated'))
        );
      },
      { timeout: 30000 },
    );

    // Load all font families, weights and styles after component hydration.
    // This also ensures the icon font is ready before screenshots.
    await waitForFonts(page);

    await use(page);
  },
});
