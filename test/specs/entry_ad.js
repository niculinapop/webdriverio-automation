import {web} from '../../locators/locatorPath.js';

describe('Entry Ad Modal functionality', () => {
  it('should verify that the Entry Ad modal appears and can be closed', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const entryAdLink = await $(web.LINKS.ENTRY_AD_LINK);
    await entryAdLink.click();

    const closeButton = await $(web.ENTRY_AD.CLOSE_BUTTON);
    await closeButton.click();

    const modalTitle = await $(web.ENTRY_AD.MODAL_TITLE);
    expect(await modalTitle.isDisplayed()).toBe(false);
  })
})