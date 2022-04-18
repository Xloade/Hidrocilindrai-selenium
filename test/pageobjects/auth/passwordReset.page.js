import Page from '../page'

class PasswordResetPage extends Page {
  get inputPassword() {
    return $('#password')
  }
  get inputPasswordRepeat() {
    return $('#passwordRepeat')
  }
  get btnSubmit () {
    return $('button[type="submit"]')
  }
  get alert() {
    return $('.alert')
  }

  async sendRequest(password, passwordRepeat) {
    await this.inputPassword.setValue(password)
    await this.inputPasswordRepeat.setValue(passwordRepeat)
    await this.btnSubmit.click()
  }

  open (token, email) {
    return super.open('password-reset/' + token + '?email=' + encodeURIComponent(email))
  }
}

export default new PasswordResetPage()
