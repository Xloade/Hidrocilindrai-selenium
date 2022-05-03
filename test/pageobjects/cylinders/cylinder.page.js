import Page from '../page'

class CylinderPage extends Page { 
  get alert() {
    return $('.my-alert')
  }
  get progress() {
    return $('.cylinder-progress')
  }
  get groupNav() {
    return $$('.cylinder-pannel .nav-item')
  }
  get groupNavChildren() {
    return $('.cylinder-pannel .nav-item')
  }
  get btnAdd() {
    return $('.tab-pane:not([style*="display: none"]) .btn-success')
  }
  get btnRemove() {
    return $('.tab-pane:not([style*="display: none"]) .btn-danger')
  }

  async fillCylinder() {
    let index = 0
    await this.groupNavChildren.waitForExist()
    while (index < await this.groupNav.length) {
      await this.groupNav[index].click()
      await browser.waitUntil(async () => (await this.btnRemove.isExisting() === false))
      await this.btnAdd.click()
      await browser.waitUntil(async () => (await this.btnRemove.isExisting() === true))
      // sadly there is small delay before new list is rendered so need to wait
      await browser.pause(200)
      index++
    }
  }

  async removeFirst() {
    await this.groupNav[0].click()
    await browser.waitUntil(async () => (await this.btnRemove.isExisting() === true))
    await this.btnRemove.click()
  }
}

export default new CylinderPage()
