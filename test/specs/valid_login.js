import {web} from '../../locators/locatorPath.js';
describe('Valid login authentication', () => {
  
  it('should loggin successfully', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const formAuthenticationLink = await $('//*[@id="content"]/ul/li[21]/a');
    await formAuthenticationLink.click();

    const usernameInput = await $(web.LOGIN.USERNAME_INPUT);
    //await usernameInput.waitForDisplayed({timeout: 5000});
   // console.log('enter username');
    await usernameInput.setValue('tomsmith');
    
   
    const passwordInput = await $(web.LOGIN.PASSWORD_INPUT);
    await passwordInput.setValue('SuperSecretPassword');

    const logginButton = await $(web.LOGIN.LOGIN_BUTTON);
    await logginButton.click();
  });
});

