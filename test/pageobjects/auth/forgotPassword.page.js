import Page from '../page'

class ForgotPasswordPage extends Page {
  get inputEmail () {
    return $('#email')
  }
  get btnSubmit () {
    return $('button[type="submit"]')
  }
  get alert() {
    return $('.alert')
  }

  async sendRequest(email) {
    await this.inputEmail.setValue(email)
    await this.btnSubmit.click()
  }

  open () {
    return super.open('forgot-password')
  }
}

export default new ForgotPasswordPage()
