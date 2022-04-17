import LoginPage from '../pageobjects/login.page'
import pageLoaded from '../tools/pageLoaded'

describe('My Login application', function () {
  it('should login with valid credentials', async function() {
    await LoginPage.open()
    await LoginPage.login('admin@gmail.com', 'admin')
    await pageLoaded.waitTillHTMLRendered()
    await expect(await browser.getTitle()).toBe('Dashboard')
  })
  // it('shouldn\'t login with invalid credentials', async function () {
  //   await browser.url(`http://localhost:3000/login`)
  //   await LoginPage.login('aaaaadmin@gmail.com', 'aaaadmin')
  //   expect(await LoginPage.alert).toExist()
  // })
})