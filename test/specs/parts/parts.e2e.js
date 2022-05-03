import PartsPage from '../../pageobjects/parts/parts.page'
import { loginAdmin } from '../../tools/login'

describe('Parts page', function () {
  before(async function () {
    await loginAdmin()
  })
  it('should create part', async function () {
    await PartsPage.open()
    await PartsPage.createPart()
    await expect(browser).toHaveTitleContaining('Part')
  })
  it('shouldn\'t delete old part that is connected to cylinder', async function () {
    await PartsPage.open()
    await PartsPage.deletePart(true)
    await expect(await PartsPage.alert).toHaveTextContaining('This part has other parts connected to it')
  })
  it('delete new part', async function () {
    await PartsPage.open()
    await PartsPage.deletePart(false)
    await expect(await PartsPage.alert).toHaveTextContaining('Successfully deleted')
  })
})