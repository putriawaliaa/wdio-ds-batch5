// describe ('Test Saucedemo', () => {
//     it('Test 1 - Open Saucedemo', async () => {
//     await browser.url('https://www.saucedemo.com/');
    // await browser.$('#user-name').addValue('Putri Awalia');
    // await browser.$('#password').addValue('Sebuah Password');

//     await browser.pause(5000)
// });
// });

// describe ('Test Saucedemo', () => {
//     it('Test 1 - Login Failed', async () => {
//     await browser.url('https://www.saucedemo.com/');

//     const usernameTextbox = await browser.$('#user-name');
//     const passwordTextbox = await browser.$('#password');
//     const loginButton = await browser.$('//input[@type="submit"]');

//     await usernameTextbox.addValue('Putri Awalia');
//     await passwordTextbox.addValue('Sebuah Password');
//     await loginButton.click();
    
//     await browser.pause(5000)
// });
// });

describe ('Test Saucedemo', () => {
    it('Test 1 - Login Successfully', async () => {
    await browser.url('https://www.saucedemo.com/');

    const usernameTextbox = await browser.$('#user-name');
    const passwordTextbox = await browser.$('#password');
    const loginButton = await browser.$('//input[@type="submit"]');

    await usernameTextbox.addValue('standard_user');
    await passwordTextbox.addValue('secret_sauce');
    await loginButton.click();
    
    await browser.pause(5000)
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    await expect(browser).toHaveTitle('Swag Labs');

    });
});