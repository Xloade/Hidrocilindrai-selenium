import Page from '../page'

class LoginPage extends Page {
  get inputEmail () {
    return $('#email')
  }

  get inputPassword () {
    return $('#password')
  }

  get btnSubmit () {
    return $('button[type="submit"]')
  } 
    
  get alert() {
    return $('.alert-danger')
  }

  async login (username, password) {
    await this.inputEmail.setValue(username)
    await this.inputPassword.setValue(password)
    await this.btnSubmit.click()
  }

  open () {
    return super.open('login')
  }
}

export default new LoginPage()
