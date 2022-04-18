import CylindersPage from '../../pageobjects/cylinders/cylinders.page'
import Faker from 'faker'
import { loginAdmin } from '../../tools/login'

describe('Cylinders page', function () {
  let name
  before(async function() {
    name = Faker.internet.userName()
    await loginAdmin()
  })
  it('shouldn\'t create cylinder with empty name', async function () {
    await CylindersPage.open()
    await CylindersPage.createCylinder('')
    await expect(await CylindersPage.alert).toHaveTextContaining('The name field is required.')
  })
  it('should change cylinder name', async function () {
    await CylindersPage.open()
    await CylindersPage.changeLastCylinder(name)
    await expect(await CylindersPage.alert).toHaveTextContaining('Successfully updated')
  })
  it('should create cylinder with name', async function () {
    await CylindersPage.open()
    await CylindersPage.createCylinder(name)
    await expect(browser).toHaveTitleContaining('Cylinder')
  })
  it('delete old filled cylinder', async function () {
    await CylindersPage.open()
    await CylindersPage.deleteCylinder(true)
    await expect(await CylindersPage.alert).toHaveTextContaining('This cylinder has parts connected to it')
  })
  it('delete new empty cylinder', async function () {
    await CylindersPage.open()
    await CylindersPage.deleteCylinder(false)
    await expect(await CylindersPage.alert).toHaveTextContaining('Successfully deleted')
  })
})