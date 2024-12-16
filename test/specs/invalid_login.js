import {web} from '../../locators/locatorPath.js';
describe('Invalid login authentication', () => {
  
  it('should display an error message', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const formAuthenticationLink = await $('//*[@id="content"]/ul/li[21]/a');
    await formAuthenticationLink.click();

    const usernameInput = await $(web.LOGIN.USERNAME_INPUT);
    const passwordInput = await $(web.LOGIN.PASSWORD_INPUT);
    await usernameInput.setValue('ErrorUser');
    await passwordInput.setValue('ErrorPassword');

    const loginButton = await $(web.LOGIN.LOGIN_BUTTON);
    await loginButton.click();

    const errorMessage = await $(web.LOGIN.ERROR_LOGIN_MESSAGE);
    expect(await errorMessage.isDisplayed()).toBe(true);
    expect(await errorMessage.getText()).toContain('Your username is invalid!'); 
    
  });
});
