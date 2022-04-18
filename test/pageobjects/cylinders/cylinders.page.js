import Page from '../page'

class LoginPage extends Page {
  get inputName () {
    return $('#name')
  }

  get btnAdd() {
    return $('#openAdd')
  }

  get btnSubmit () {
    return $('.modal-dialog').$('.btn-success')
  }
  
  get btnLastDelete() {
    return $('*:last-child>.cylinder-card .btn-danger')
  }

  get btnFirstDelete() {
    return $('.cylinder-card .btn-danger')
  }

  get btnLastEdit() {
    return $('*:last-child>.cylinder-card .btn-info')
  }
    
  get alert() {
    return $('.alert')
  }

  async createCylinder(name) {
    await this.btnAdd.click()
    await this.inputName.setValue(name)
    await this.btnSubmit.click()
  }

  async changeLastCylinder(name) {
    await this.btnLastEdit.click()
    await this.inputName.setValue(name)
    await this.btnSubmit.click()
  }

  async deleteCylinder(isFirstorLast) {
    if (isFirstorLast) {
      await this.btnFirstDelete.click()
    } else {
      await this.btnLastDelete.click()
    }
  }

  open () {
    return super.open('cylinders')
  }
}

export default new LoginPage()
