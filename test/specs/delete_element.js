import {web} from '../../locators/locatorPath.js';
describe('Delete element', () => {
  
  it('should successfully remove an element from the page', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const addRemoveElementsLink = await $(web.LINKS.ADD_REMOVE_ELEMENT_LINK);
    await addRemoveElementsLink.click();

    const addElementButton = await $(web.ADD_REMOVE.ADD_ELEMENT_BUTTON);
    await addElementButton.click();

    const deleteElementButton = await $(web.ADD_REMOVE.DELETE_ELEMENT_BUTTON);
    await deleteElementButton.click();

    expect(await deleteElementButton.isDisplayed()).toBe(false);
  });
});