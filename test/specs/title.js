describe('eMag.ro', () => {

  it('should have the correct page title', async () => {
    await browser.url('https://www.emag.ro/');
    await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');
  });
});