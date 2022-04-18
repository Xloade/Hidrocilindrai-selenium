import Page from './page'

class RegisterPage extends Page {
  get inputEmail () {
    return $('#email')
  }
  get inputName() {
    return $('#name')
  }
  get inputPassword () {
    return $('#password')
  }
  get inputPasswordRepeat() {
    return $('#passwordRepeat')
  }
  get btnSubmit () {
    return $('button[type="submit"]')
  }
  get alert() {
    return $('.alert-danger')
  }

  async register(email, name, password, passwordRepeat) {
    await this.inputEmail.setValue(email)
    await this.inputName.setValue(name)
    await this.inputPassword.setValue(password)
    await this.inputPasswordRepeat.setValue(passwordRepeat)
    await this.btnSubmit.click()
  }

  open () {
    return super.open('register')
  }
}

export default new RegisterPage()
