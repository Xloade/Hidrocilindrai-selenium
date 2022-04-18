import PasswordReset from '../../pageobjects/auth/passwordReset.page'
import Faker from 'faker'

describe('Password reset page', function () {
  let token
  let email
  let password
  let passwordSecond
  let shortPassword
  before(function () {
    token = Faker.random.alphaNumeric(30)
    email = Faker.internet.email()
    password = Faker.internet.password(8)
    passwordSecond = Faker.internet.password(8)
    shortPassword = Faker.internet.password(5)
  })

  it('shouldn\'t change password different passwords', async function () {
    await PasswordReset.open(token, 'admin@gmail.com')
    await PasswordReset.sendRequest(password, passwordSecond)
    await expect(await PasswordReset.alert).toHaveTextContaining('The password confirmation does not match.')
  })
  it('shouldn\'t change password short password', async function () {
    await PasswordReset.open(token, 'admin@gmail.com')
    await PasswordReset.sendRequest(shortPassword, shortPassword)
    await expect(await PasswordReset.alert).toHaveTextContaining('The password must be at least 8 characters.')
  })
  it('shouldn\'t change password random token', async function () {
    await PasswordReset.open(token, 'admin@gmail.com')
    await PasswordReset.sendRequest(password, password)
    await expect(await PasswordReset.alert).toHaveTextContaining('This password reset token is invalid.')
  })
  it('shouldn\'t change password non excistent email', async function () {
    await PasswordReset.open(token, email)
    await PasswordReset.sendRequest(password, password)
    await expect(await PasswordReset.alert).toHaveTextContaining('We can\'t find a user with that email address.')
  })
})