describe ('Redirect link functionality', () => {
  it('should redirect to the correct page', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const redirectLink = await $('//*[@id="content"]/ul/li[36]/a');
    await redirectLink.click();

    const statusCodePage = await $('#redirect');
    await statusCodePage.click();

    const status200 = await $('//*[@id="content"]/div/ul/li[1]/a');
    await status200.click();

    // const text = await $('//*[@id="content"]/div/p').getText();
    // expect(text).toBe('This page returned a 200 status code.
    const resultText = await $('//*[@id="content"]/div/p').getText();
    expect(resultText).toContain('This page returned a 200 status code.');

  })
})