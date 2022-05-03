import PartPage from '../../pageobjects/parts/part.page'
import PartsPage from '../../pageobjects/parts/parts.page'
import ConnectionPage from '../../pageobjects/parts/connection.page'
import DimentionPage from '../../pageobjects/parts/dimention.page'
import { loginAdmin } from '../../tools/login'
import Faker from 'faker'

describe('Part page', function () {
  let name
  before(async function () {
    name = Faker.internet.userName()
    await loginAdmin()

    await PartsPage.open()
    await PartsPage.createPart()
    await browser.waitUntil(
      async () => (await browser.getTitle()).startsWith('Part:'),
    )
  })
  describe('dimention edit', function() {
    it('should create dimention', async function () {
      await ConnectionPage.editBtn.click()
      await DimentionPage.createDimention(name)
      await expect(await ConnectionPage.alert).toHaveTextContaining('Successfully created')
    })
    it('should\'t create dimention without name', async function () {
      await DimentionPage.createDimention('')
      await expect(await DimentionPage.alert).toHaveTextContaining('The name field is required.')
      await DimentionPage.cancelBtn.click()
    })
    it('should edit dimention', async function () {
      await DimentionPage.editDimention(name + 'new')
      await expect(await ConnectionPage.alert).toHaveTextContaining('Successfully updated')
    })
    it('should\'t edit dimention without name', async function () {
      await DimentionPage.editDimention('')
      await expect(await DimentionPage.alert).toHaveTextContaining('The name field is required.')
      await DimentionPage.cancelBtn.click()
    })
    it('should delete unused dimention', async function () {
      await DimentionPage.deleteDimention()
      await expect(await PartPage.alert).toHaveTextContaining('Successfully deleted')
    })
    it('should\'t delete used dimention', async function () {
      await DimentionPage.selectDimmention(1)
      await DimentionPage.deleteDimention()
      await expect(await PartPage.alert).toHaveTextContaining('This dimentions is used by part types')
      await ConnectionPage.cancelBtn.click()
    })
  })
})