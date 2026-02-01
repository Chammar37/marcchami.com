import { test, expect } from '@playwright/test';

test.describe('Marc Chami Portfolio Site', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Page Structure', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/marcchami/i);
    });

    test('main div exists', async ({ page }) => {
      const mainDiv = page.locator('.main-div');
      await expect(mainDiv).toBeVisible();
    });
  });

  test.describe('Header Section', () => {
    test('displays name', async ({ page }) => {
      await expect(page.locator('h1')).toContainText('marc j chami');
    });

    test('displays job title', async ({ page }) => {
      await expect(page.getByText('Software Engineer @ RadLabs')).toBeVisible();
    });

    test('displays location', async ({ page }) => {
      await expect(page.getByText('Based in Toronto')).toBeVisible();
    });
  });

  test.describe('Sidebar Navigation', () => {
    test('sidebar shows marcchami.com link', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      await expect(page.getByText('marcchami.com').first()).toBeVisible();
    });

    test('sidebar has Projects link', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      const projectsLink = page.locator('a[href="#projects"]');
      await expect(projectsLink).toBeVisible();
    });

    test('sidebar has About link', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      const aboutLink = page.locator('a[href="#about"]');
      await expect(aboutLink).toBeVisible();
    });
  });

  test.describe('Social Links', () => {
    test('LinkedIn link exists and points to correct URL', async ({ page }) => {
      const linkedinLink = page.locator('a[href="https://www.linkedin.com/in/marcchami/"]');
      await expect(linkedinLink).toBeVisible();
    });

    test('Email link exists', async ({ page }) => {
      const emailLink = page.locator('a[href="mailto:m.chami37@hotmail.com"]');
      await expect(emailLink).toBeVisible();
    });

    test('GitHub link exists', async ({ page }) => {
      const githubLink = page.locator('a[href="https://github.com/Chammar37"]');
      await expect(githubLink).toBeVisible();
    });
  });

  test.describe('Projects Section', () => {
    test('Projects section exists with header', async ({ page }) => {
      await expect(page.locator('#projects')).toBeVisible();
      await expect(page.getByText('Projects >')).toBeVisible();
    });

    test('Book Map project is displayed', async ({ page }) => {
      await expect(page.getByText('[Book Map]')).toBeVisible();
      await expect(page.getByText('Semantic book search using AI')).toBeVisible();
    });

    test('Album Recommender project is displayed', async ({ page }) => {
      await expect(page.getByText('[Album Recommender]')).toBeVisible();
      await expect(page.getByText('Find similar music albums')).toBeVisible();
    });

    test('interviewprep.ai project is displayed', async ({ page }) => {
      await expect(page.getByText('[interviewprep.ai]')).toBeVisible();
    });

    test('Scrap.it project is displayed', async ({ page }) => {
      await expect(page.getByText('[Scrap.it]')).toBeVisible();
    });

    test('NBA Analytics project is displayed', async ({ page }) => {
      await expect(page.getByText('[NBA Analytics]')).toBeVisible();
    });

    test('Twitter Trends project is displayed', async ({ page }) => {
      await expect(page.getByText('[Twitter Trends]')).toBeVisible();
    });

    test('project tech tags are visible', async ({ page }) => {
      await expect(page.getByRole('button', { name: 'react' })).toBeVisible();
      await expect(page.getByRole('button', { name: 'python' }).first()).toBeVisible();
    });
  });

  test.describe('About Section', () => {
    test('About section exists with header', async ({ page }) => {
      await expect(page.locator('#about')).toBeVisible();
      await expect(page.getByText('About >')).toBeVisible();
    });

    test('About section contains bio text', async ({ page }) => {
      await expect(page.getByText('A proven Software Engineer delivering high-quality software solutions')).toBeVisible();
    });

    test('About section contains Lex Fridman quote', async ({ page }) => {
      await expect(page.getByText('Nobody can tell me how to think')).toBeVisible();
      await expect(page.getByText('- Lex Fridman')).toBeVisible();
    });

    test('mentions martial arts and music background', async ({ page }) => {
      await expect(page.getByText('2nd-degree black belt')).toBeVisible();
      await expect(page.getByText('Royal Conservatory of Music')).toBeVisible();
    });
  });

  test.describe('Fonts and Styling', () => {
    test('main-div uses B612 Mono font family', async ({ page }) => {
      const mainDiv = page.locator('.main-div');
      const fontFamily = await mainDiv.evaluate((el) =>
        window.getComputedStyle(el).fontFamily
      );
      expect(fontFamily.toLowerCase()).toContain('b612 mono');
    });

    test('background color is correct (#d4dcda)', async ({ page }) => {
      const bgColor = await page.evaluate(() =>
        window.getComputedStyle(document.documentElement).backgroundColor
      );
      // RGB equivalent of #d4dcda
      expect(bgColor).toBe('rgb(212, 220, 218)');
    });

    test('primary color is applied to text elements', async ({ page }) => {
      const header = page.locator('h1');
      const color = await header.evaluate((el) =>
        window.getComputedStyle(el).color
      );
      // #6C848D in RGB
      expect(color).toBe('rgb(108, 132, 141)');
    });

    test('header has correct text size (text-3xl)', async ({ page }) => {
      const header = page.locator('h1');
      const fontSize = await header.evaluate((el) =>
        window.getComputedStyle(el).fontSize
      );
      // text-3xl is 1.875rem = 30px
      expect(fontSize).toBe('30px');
    });
  });

  test.describe('Responsive Design', () => {
    test('sidebar is visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      const sidebar = page.locator('nav').filter({ hasText: 'Projects' });
      await expect(sidebar).toBeVisible();
    });

    test('sidebar is hidden on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      // The sidebar parent div has "hidden md:flex" class
      const sidebarContainer = page.locator('.hidden.md\\:flex');
      await expect(sidebarContainer).toBeHidden();
    });
  });

  test.describe('External Links', () => {
    test('GitHub project links have correct URLs', async ({ page }) => {
      const albumRecommenderLink = page.locator('form[action="https://github.com/Chammar37/Album-Recommender"]');
      await expect(albumRecommenderLink).toBeVisible();

      const nbaAnalyticsLink = page.locator('form[action="https://github.com/Chammar37/NBA-Analytics"]');
      await expect(nbaAnalyticsLink).toBeVisible();
    });

    test('external links open in new tab', async ({ page }) => {
      const externalForms = page.locator('form[target="_blank"]');
      const count = await externalForms.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('SVG Icons', () => {
    test('social icons are rendered', async ({ page }) => {
      // LinkedIn, Email, GitHub icons
      const svgIcons = page.locator('svg');
      const count = await svgIcons.count();
      expect(count).toBeGreaterThan(5); // At least social icons + project link icons
    });
  });
});
