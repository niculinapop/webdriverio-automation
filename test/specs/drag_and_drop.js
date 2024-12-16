import {web} from '../../locators/locatorPath.js';
describe('Drag and drop functionality', () => {
  
  it('should drag and drop successfully', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const dragAndDropLink = await $(web.LINKS.DRAG_AND_DROP_LINK);
    await dragAndDropLink.click();

    const element = await $(web.DRAG_AND_DROP.ELEMENT);
    const target = await $(web.DRAG_AND_DROP.TARGET);

    //drag and drop to other element
    await element.dragAndDrop(target);

    const columnAText = await $(web.DRAG_AND_DROP.ELEMENT).getText();
    const columnBText = await $(web.DRAG_AND_DROP.TARGET).getText();

    expect(columnAText).toBe('B'); 
    expect(columnBText).toBe('A');
    
  });
});