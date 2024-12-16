import {web} from '../../locators/locatorPath.js';

describe('Dropdown functionality test', () => {
  it('should verify that options in the dropdown can be selected', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const dropdownLink = await $(web.LINKS.DROPDOWN_LINK);
    await dropdownLink.click();

    const dropdown = await $(web.DROPDOWN.DROPDOWN);
    await dropdown.click();

    const option1 = await $(web.DROPDOWN.OPTION1);
    await option1.click()
  })
})