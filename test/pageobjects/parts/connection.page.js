import Page from '../page'

class ConnectionPage extends Page {
  get alert() {
    return $('.modal .my-alert')
  }
  get connectionSelect() {
    return $('.part-edit select')
  }
  get createBtn() {
    return $('.part-edit .btn-success')
  }
  get editBtn() {
    return $('.part-edit .btn-info')
  }
  get deleteBtn() {
    return $('.part-edit .btn-danger')
  }
  get submitBtn() {
    return $('footer .btn-success')
  }
  get cancelBtn() {
    return $('footer .btn-secondary')
  }
  get nameInput() {
    return $('#name')
  }
  get partTypeInput() {
    return $('#partType')
  }

  async createConnection(name, partType) {
    await this.createBtn.click()
    await this.nameInput.setValue(name)
    await this.partTypeInput.selectByAttribute('value', partType)
    await this.submitBtn.click()
  }
  async selectConnection(connection) {
    if (!connection) return
    if (typeof connection === 'number')
      await this.connectionSelect.selectByAttribute('value', connection)
    else
      await this.connectionSelect.selectByVisibleText(connection)
  }
  async editConnection(name, partType) {
    await this.editBtn.click()
    await this.nameInput.setValue(name)
    await this.partTypeInput.selectByAttribute('value', partType)
    await this.submitBtn.click()
  }
  async deleteConnection(connection) {
    await this.selectConnection(connection)
    await this.deleteBtn.click()
  }
}

export default new ConnectionPage()
