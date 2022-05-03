import Page from '../page'

class DimentionPage extends Page {
  get alert() {
    return $('#DimentionModal .my-alert')
  }
  get addBtn() {
    return $('#ConnectionModal #add')
  }
  get createBtn() {
    return $('#ConnectionModal #create')
  }
  get editBtn() {
    return $('#ConnectionModal #edit')
  }
  get deleteBtn() {
    return $('#ConnectionModal #delete')
  }
  get submitBtn() {
    return $('#DimentionModal footer .btn-success')
  }
  get cancelBtn() {
    return $('#DimentionModal footer .btn-secondary')
  }
  get nameInput() {
    return $('#DimentionModal #name')
  }
  get dimmentionSelect() {
    return $('.dimention-edit  select')
  }
  async selectDimmention(dimention) {
    if (!dimention) return
    if (typeof dimention === 'number')
      await this.dimmentionSelect.selectByAttribute('value', dimention)
    else
      await this.dimmentionSelect.selectByVisibleText(dimention)
  }
  async createDimention(name) {
    await this.createBtn.click()
    await this.nameInput.setValue('filler')
    await this.nameInput.setValue(name)
    await this.submitBtn.click()
  }
  async editDimention(name) {
    await this.editBtn.click()
    await this.nameInput.setValue('filler')
    await this.nameInput.setValue(name)
    await this.submitBtn.click()
  }
  async deleteDimention() {
    await this.deleteBtn.click()
  }
}

export default new DimentionPage()
