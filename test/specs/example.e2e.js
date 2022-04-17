describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await browser.url(`http://localhost:3000/login`);

    await $('#email').setValue('admin@gmail.com');
    await $('#password').setValue('admin');
    await $('button[type="submit"]').click();

    const puppeteerBrowser = await browser.getPuppeteer()
    await browser.call(async () => {
      const pages = await puppeteerBrowser.pages()
      await expect(await pages[0].mainFrame().title()).toBe('Dashboard');
    })
  });
});