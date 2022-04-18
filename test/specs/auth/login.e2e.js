import LoginPage from '../../pageobjects/login.page'
import pageLoaded from '../../tools/pageLoaded'

describe('Login page', function () {
  it('shouldn\'t login with invalid credentials', async function () {
    await LoginPage.open()
    await LoginPage.login('aaaaadmin@gmail.com', 'aaaadmin')
    expect(await LoginPage.alert).toExist()
  })
  it('should login with valid credentials', async function () {
    await LoginPage.open()
    await LoginPage.login('admin@gmail.com', 'admin')
    await pageLoaded.waitTillHTMLRendered()
    await expect(await browser.getTitle()).toBe('Dashboard')

    
  })
})