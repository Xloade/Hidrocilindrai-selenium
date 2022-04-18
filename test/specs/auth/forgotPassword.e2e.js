import ForgotPassword from '../../pageobjects/auth/forgotPassword.page'
import Faker from 'faker'

describe('New user register', function () {
  let email
  before(function () {
    email = Faker.internet.email()
  })
  it('shouldn\'t approve request of non excistent email', async function () {
    await ForgotPassword.open()
    await ForgotPassword.sendRequest(email)
    await expect(await ForgotPassword.alert).toHaveTextContaining('We can\'t find a user with that email address.')
  })
  it('should approve request of admin acount', async function () {
    await ForgotPassword.open()
    await ForgotPassword.sendRequest('admin@gmail.com')
    await expect(await ForgotPassword.alert).toHaveTextContaining('We have emailed your password reset link!')
  })
})