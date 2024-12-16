import {web} from '../../locators/locatorPath.js';
describe('Add element', () => {
  
  it('should display a new element on the page', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const addRemoveElementsLink = await $(web.LINKS.ADD_REMOVE_ELEMENT_LINK);
    await addRemoveElementsLink.click();

    const addElementButton = await $(web.ADD_REMOVE.ADD_ELEMENT_BUTTON);
    await addElementButton.click();

    const deleteElementButton = await $(web.ADD_REMOVE.DELETE_ELEMENT_BUTTON);
    expect(await deleteElementButton.isDisplayed()).toBe(true);
  });
});