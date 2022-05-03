import Page from '../page'

class PartDimentionPage extends Page {
  get alert() {
    return $('.alert')
  }
  get submitBtn() {
    return $('.part-dimention-edit .btn-success')
  }
  get firstField() {
    return $('.part-dimention-edit input')
  }
  async setFirst(value) {
    await this.firstField.setValue('filler')
    await this.firstField.setValue(value)
    await this.submitBtn.click()
  }
}

export default new PartDimentionPage()
