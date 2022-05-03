import PartPage from '../../pageobjects/parts/part.page'
import PartsPage from '../../pageobjects/parts/parts.page'
import ConnectionPage from '../../pageobjects/parts/connection.page'
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
    await browser.pause(1000)
  })
  describe('connection edit', function () {
    it('should create connection', async function() {
      await ConnectionPage.createConnection(name, 2)
      await expect(await PartPage.alert).toHaveTextContaining('Successfully created')
    })
    it('should\'t create connection without name', async function () {
      await ConnectionPage.createConnection('', 2)
      await expect(await ConnectionPage.alert).toHaveTextContaining('The name field is required.')
      await ConnectionPage.cancelBtn.click()
    })
    it('should edit connection', async function () {
      await ConnectionPage.editConnection(name+'new', 2)
      await expect(await PartPage.alert).toHaveTextContaining('Successfully updated')
    })
    it('should\'t edit connection without name', async function () {
      await ConnectionPage.editConnection('', 2)
      await expect(await ConnectionPage.alert).toHaveTextContaining('The name field is required.')
      await ConnectionPage.cancelBtn.click()
    })
    it('should delete unused connection', async function () {
      await ConnectionPage.deleteConnection()
      await expect(await PartPage.alert).toHaveTextContaining('Successfully deleted')
    })
    it('should\'t delete used connection', async function () {
      await ConnectionPage.deleteConnection(2)
      await expect(await PartPage.alert).toHaveTextContaining('Failed to delete')
    })
  })
})