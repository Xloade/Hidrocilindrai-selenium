import Page from '../page'

class PartPage extends Page {
  get alert() {
    return $('.my-alert')
  }
  get partEditInputs() {
    return $('.part-edit').$$('input')
  }
  get partEditSelect() {
    return $('.part-edit select')
  }
  get partEditSave() {
    return $('#submitPart')
  }
  async editPart(x_offset, y_offset, z_offset, x_a_offset, y_a_offset, z_a_offset, select) {
    await this.partEditInputs[0].setValue(x_offset)
    await this.partEditInputs[1].setValue(y_offset)
    await this.partEditInputs[2].setValue(z_offset)
    await this.partEditInputs[3].setValue(x_a_offset)
    await this.partEditInputs[4].setValue(y_a_offset)
    await this.partEditInputs[5].setValue(z_a_offset)
    await this.partEditSelect.selectByAttribute('value', select)
    await this.partEditSave.click()
  }
}

export default new PartPage()
