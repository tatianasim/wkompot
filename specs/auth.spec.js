describe('Auth', function () {
    it('Successful log in', async function() {
        await browser.url('/user/login');
        await expect($('.login-form-button')).toBeDisabled();
        await $('[qa-id="email"]').setValue('test@example.com');
        await $('[qa-id="password"]').setValue('Qwerty!23');
        await expect($('.login-form-button')).toBeEnabled();
        await $('.login-form-button').click();
        await expect($('img[alt="avatarIcon"]')).toBeDisplayed();
    });
});