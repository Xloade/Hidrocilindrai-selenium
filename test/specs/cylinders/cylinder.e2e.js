import CylinderPage from '../../pageobjects/cylinders/cylinder.page'
import CylindersPage from '../../pageobjects/cylinders/cylinders.page'
import Faker from 'faker'
import { loginAdmin } from '../../tools/login'

describe('Cylinder page', function () {
  let name
  before(async function() {
    name = Faker.internet.userName()
    await loginAdmin()

    await CylindersPage.open()
    await CylindersPage.createCylinder(name)
  })
  it('should fill cylinder', async function () {
    await CylinderPage.fillCylinder()
    await expect(await CylinderPage.progress).toHaveTextContaining('Cylinder is fully created')
  })
  it('should remove last part', async function () {
    await CylinderPage.btnRemove.click()
    await expect(await CylinderPage.progress).toHaveTextContaining('Cylinder has missing parts')
  })
  it('should\'t add new part to filled connection', async function () {
    // hardcoded can be issue atm only 2nd connection have other part
    await CylinderPage.groupNav[1].click()
    await browser.waitUntil(async () => (await CylinderPage.btnRemove.isExisting() === true))
    await CylinderPage.btnAdd.click()
    await expect(await CylinderPage.alert).toHaveTextContaining('Cylinder already has selected part for this connection')
  })
  it('should\'t delete part with filled connections', async function () {
    await CylinderPage.removeFirst()
    await expect(await CylinderPage.alert).toHaveTextContaining('This part has other parts connected to it')
  })
})