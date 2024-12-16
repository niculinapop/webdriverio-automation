import {web} from '../../locators/locatorPath.js';

describe('Checkbox functionality test', () => {
  it('should verify that checkboxes can be selected and deselected', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const checkboxesLink = await $(web.LINKS.CHECKBOXES_LINK);
    await checkboxesLink.click();

    const uncheckedBox = await $(web.CHECKBOXES.UNCHECKED);
    await uncheckedBox.click();

    const checkedBox = await uncheckedBox.getAttribute('checked');
    expect(checkedBox).not.toBe(null);
  })
})