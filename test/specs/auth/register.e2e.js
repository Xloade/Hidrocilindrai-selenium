import RegisterPage from '../../pageobjects/register.page'
import Faker from 'faker'

describe('New user register', function () {
  let email
  let name
  let password
  let passwordSecond
  let shortPassword
  before(function() {
    email = Faker.internet.email()
    name = Faker.internet.userName()
    password = Faker.internet.password(8)
    passwordSecond = Faker.internet.password(8)
    shortPassword = Faker.internet.password(5)
  })
  it('shouldn\'t register with different passwords', async function () {
    await RegisterPage.open()
    await RegisterPage.register(email, name, password, passwordSecond)
    await expect(await RegisterPage.alert).toHaveTextContaining('The password confirmation does not match.')
  })
  it('shouldn\'t register with short password', async function () {
    await RegisterPage.open()
    await RegisterPage.register(email, name, shortPassword, shortPassword)
    await expect(await RegisterPage.alert).toHaveTextContaining('The password must be at least 8 characters.')
  })
  it('should register with correct password', async function () {
    await RegisterPage.open()
    await RegisterPage.register(email, name, password, password)
    await browser.waitUntil(
      async () => (await browser.getTitle()) === 'Dashboard',
      {
        timeout: 10000,
      }
    )
  })
  it('shouldn\'t register with same email', async function () {
    await browser.deleteCookies('laravel_session')
    await RegisterPage.open()
    await RegisterPage.register(email, name, shortPassword, shortPassword)
    await expect(await RegisterPage.alert).toHaveTextContaining('The email has already been taken.')
  })
})