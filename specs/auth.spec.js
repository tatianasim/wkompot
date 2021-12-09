import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function () {
    beforeEach(async function() {
        await LoginPage.open();
    });

    it('Successful log in', async function() {
        await expect(LoginPage.buttonSubmit).toBeDisabled();
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await expect(ProfilePage.iconUser).toBeDisplayed();
    });

        // await browser.url('/user/login');
        // await expect($('.login-form-button')).toBeDisabled();
        // await $('[qa-id="email"]').setValue('test@example.com');
        // await $('[qa-id="password"]').setValue('Qwerty!23');
        // await expect($('.login-form-button')).toBeEnabled();
        // await $('.login-form-button').click();
        // await expect($('img[alt="avatarIcon"]')).toBeDisplayed();
        // const a = await $('.col-md-8 > h4').getText();
        // await expect($('.col-md-8 > h4')).toHaveText('Reports');
    // });


    it('Log in attempt with non-register email', async function() {
        await LoginPage.login('testinvalid@example.com', 'testinvalid');
        await expect(LoginPage.notification).toHaveText('Email is not registered');
    });

    it('Log in attempt with invalid password', async function() {
        await LoginPage.login('test@example.com', 'testinvalid');
        await expect(LoginPage.notification).toHaveText('Incorrect password');
    });

    it('Credentials are required', async function() {
        await LoginPage.inputUsername.setValue('test');
        await LoginPage.inputUsername.smartClear();
        await expect(LoginPage.loginError).toHaveText('Required');
        await LoginPage.inputPassword.setValue('test');
        await LoginPage.inputPassword.smartClear();
        await expect(LoginPage.passwordError).toHaveText('Required');
    });

});
