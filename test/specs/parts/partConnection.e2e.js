import PartsPage from '../../pageobjects/parts/parts.page'
import PartConnectionnPage from '../../pageobjects/parts/partConnection.page'
import { loginAdmin } from '../../tools/login'

describe('Part page', function () {
  before(async function () {
    await loginAdmin()

    await PartsPage.open()
    await PartsPage.createPart()
    await browser.waitUntil(
      async () => (await browser.getTitle()).startsWith('Part:'),
    )
  })
  describe('edit part connection', function () {
    it('should add connection to part', async function () {
      await PartConnectionnPage.addConnection(1)
      await expect(await PartConnectionnPage.alert).toHaveTextContaining('Successfully added')
    })
    it('should edit part connecion with corrent values', async function () {
      await PartConnectionnPage.editConnection(100, 100, 100, 100, 100, 100)
      await expect(await PartConnectionnPage.alert).toHaveTextContaining('Successfully updated')
    })
    it('should\'t edit part connecion with incorrent values', async function () {
      await PartConnectionnPage.editConnection('', 100, 100, 100, 100, 100)
      await expect(await PartConnectionnPage.alert).toHaveTextContaining('The x offset field is required.')
    })
    it('should delete connection from part', async function () {
      await PartConnectionnPage.deleteConnection()
      await expect(await PartConnectionnPage.alert).toHaveTextContaining('Successfully deleted')
    })
  })
})