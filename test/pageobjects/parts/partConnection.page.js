import Page from '../page'

class PartConnectionPage extends Page {
  get alert() {
    return $('.my-alert')
  }
  get addBtn() {
    return $('.part-connection-edit #add')
  }
  get submitBtn() {
    return $('.part-connection-offset-edit .btn-success')
  }
  get removeBtn() {
    return $('.part-connection-edit .btn-danger')
  }
  get connectionSelect() {
    return $('.part-connection-edit select')
  }
  get openEditBtn() {
    return $('.part-connection-edit .btn-secondary')
  }
  get connectionEditInputs() {
    return $('.part-connection-offset-edit').$$('input')
  }
  async selectDimmention(connection) {
    if (!connection) return
    if (typeof connection === 'number')
      await this.connectionSelect.selectByAttribute('value', connection)
    else
      await this.connectionSelect.selectByVisibleText(connection)
  }
  async addConnection(connection) {
    await this.selectDimmention(connection)
    await this.addBtn.click()
  }
  async deleteConnection() {
    await this.removeBtn.click()
  }
  async editConnection(x_offset, y_offset, z_offset, x_a_offset, y_a_offset, z_a_offset) {
    await this.openEditBtn.click()
    await this.connectionEditInputs[0].setValue(x_offset)
    await this.connectionEditInputs[1].setValue(y_offset)
    await this.connectionEditInputs[2].setValue(z_offset)
    await this.connectionEditInputs[3].setValue(x_a_offset)
    await this.connectionEditInputs[4].setValue(y_a_offset)
    await this.connectionEditInputs[5].setValue(z_a_offset)
    await this.submitBtn.click()
    await this.openEditBtn.click()
  }
}

export default new PartConnectionPage()
