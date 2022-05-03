import PartPage from '../../pageobjects/parts/part.page'
import PartsPage from '../../pageobjects/parts/parts.page'
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
  describe('part edit', function() {
    it('should edit part', async function () {
      await PartPage.editPart(100,100,100,100,100,100,2)
      await expect(await PartPage.alert).toHaveTextContaining('Successfully updated')
    })
    it('should\'t edit part with invalid argument', async function () {
      await PartPage.editPart('', 100, 100, 100, 100, 100, 2)
      await expect(await PartPage.alert).toHaveTextContaining('The x offset field is required.')
    })
  })
})