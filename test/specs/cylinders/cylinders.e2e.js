import CylindersPage from '../../pageobjects/cylinders/cylinders.page'
import Faker from 'faker'

describe('Cylinder page', function () {
  let name
  before(function() {
    name = Faker.internet.userName()
  })
  it('shouldn\'t register with different passwords', async function () {
    await CylindersPage.open()
    await CylindersPage.register(email, name, password, passwordSecond)
    await expect(await RegisterPage.alert).toHaveTextContaining('The password confirmation does not match.')
  })
})