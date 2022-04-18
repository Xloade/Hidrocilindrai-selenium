/*eslint-env browser*/
//from https://stackoverflow.com/a/61304202/18474817
export async function waitTillHTMLRendered(timeout = 30000) {
  const puppeteerBrowser = await browser.getPuppeteer()
  await browser.call(async () => {
    const pages = await puppeteerBrowser.pages()
    const page = pages[0].mainFrame()
    const checkDurationMsecs = 1000
    const maxChecks = timeout / checkDurationMsecs
    let lastHTMLSize = 0
    let checkCounts = 1
    let countStableSizeIterations = 0
    const minStableSizeIterations = 3
  
    while (checkCounts++ <= maxChecks) {
      let html = await page.content()
      let currentHTMLSize = html.length
  
      await page.evaluate(() => document.body.innerHTML.length)
  
      if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
        countStableSizeIterations++
      else
        countStableSizeIterations = 0 //reset the counter
  
      if (countStableSizeIterations >= minStableSizeIterations) {
        break
      }
  
      lastHTMLSize = currentHTMLSize
      await page.waitForTimeout(checkDurationMsecs)
    }
  })
}