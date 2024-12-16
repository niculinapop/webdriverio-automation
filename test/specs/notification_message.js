import {web} from '../../locators/locatorPath.js';
describe ('Notification Message Test', () => {
  it('should verify notification messages and their functionality', async () =>{
    await browser.url('https://the-internet.herokuapp.com/');

    const notificationMessagesLink = await $(web.LINKS.NOTIFICATION_MESSAGES_LINK);
    await notificationMessagesLink.click();

    const notificationButton = await $(web.NOTIFICATION.NOTIFICATION_BUTTON);
    await notificationButton.click();

    const messageContainer = await $(web.NOTIFICATION.MESSAGE_CONTAINER)
    expect(await messageContainer.isDisplayed()).toBe(true);
  })
})