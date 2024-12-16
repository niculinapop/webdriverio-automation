import {web} from '../../locators/locatorPath.js';
describe ('Redirect link functionality', () => {
  it('should redirect to the correct page', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const redirectLink = await $(web.LINKS.REDIRECT_LINK);
    await redirectLink.click();

    const statusCodePage = await $(web.REDIRECT.STATUS_CODE_PAGE);
    await statusCodePage.click();

    const status200 = await $(web.REDIRECT.STATUS_200);
    await status200.click();

    const resultText = await $(web.REDIRECT.RESULT_TEXT).getText();
    expect(resultText).toContain('This page returned a 200 status code.');

  })
})