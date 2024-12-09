describe('Drag and drop functionality', () => {
  
  it('should drag and drop successfully', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const dragAndDropLink = await $('//*[@id="content"]/ul/li[10]/a');
    await dragAndDropLink.click();

    const element = await $('#column-a');
    const target = await $('#column-b');

    //drag and drop to other element
    await element.dragAndDrop(target);

    const columnAText = await $('#column-a').getText();
    const columnBText = await $('#column-b').getText();

    expect(columnAText).toBe('B'); 
    expect(columnBText).toBe('A');
    
  });
});