import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', function () {
    it('Successful log in', async function() {
        await LoginPage.open();
        await expect(LoginPage.buttonSubmit).toBeDisabled();
        await LoginPage.login('test@example.com', 'Qwerty!23');
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
});