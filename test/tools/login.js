import LoginPage from '../pageobjects/auth/login.page'

export async function loginAdmin() {
  await LoginPage.open()
  await LoginPage.login('admin@gmail.com', 'admin')
  await browser.waitUntil(
    async () => (await browser.getTitle()) === 'Dashboard',
    {
      timeout: 10000,
    }
  )
}