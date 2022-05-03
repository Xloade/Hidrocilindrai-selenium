import PartPage from '../../pageobjects/parts/part.page'
import PartsPage from '../../pageobjects/parts/parts.page'
import PartDimentionPage from '../../pageobjects/parts/partDimention.page'
import { loginAdmin } from '../../tools/login'
import Faker from 'faker'

describe('Part page', function () {
  let name
  let number
  before(async function () {
    name = Faker.internet.userName()
    number = Faker.random.number(100)
    await loginAdmin()

    await PartsPage.open()
    await PartsPage.createPart()
    await browser.waitUntil(
      async () => (await browser.getTitle()).startsWith('Part:'),
    )
  })
  describe('edit part dimentions', function () {
    it('should set number as value', async function () {
      await PartDimentionPage.setFirst(number)
      await expect(await PartPage.alert).toHaveTextContaining('All dimentions saved')
    })
    it('should set string as value', async function () {
      await PartDimentionPage.setFirst(name)
      await expect(await PartPage.alert).toHaveTextContaining('All dimentions saved')
    })
  })
})