import Page from '../page'

class PartsPage extends Page {
  get btnAdd() {
    return $('#add')
  }

  get btnLastDelete() {
    return $('*:last-child>.part-card .btn-danger')
  }

  get btnFirstDelete() {
    return $('.part-card .btn-danger')
  }

  get btnLastEdit() {
    return $('*:last-child>.part-card .btn-info')
  }

  get alert() {
    return $('.alert')
  }

  async createPart() {
    await this.btnAdd.click()
  }

  async deletePart(isFirstorLast) {
    if (isFirstorLast) {
      await this.btnFirstDelete.click()
    } else {
      await this.btnLastDelete.click()
    }
  }

  open() {
    return super.open('parts')
  }
}

export default new PartsPage()
