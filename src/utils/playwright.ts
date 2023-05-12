import playwright from 'playwright'
import { Page } from '@playwright/test'
import { FeedConfig, USER_AGENT } from '../interfaces/enums'
import { NewspaperType, PostFeedInterface } from '../interfaces/types'

class ScrapService {
  private feeds: PostFeedInterface[] = []

  get getFeeds() {
    return this.feeds
  }

  async scrapElMundo() {
    try {
      const browser = await playwright.chromium.launch({ headless: true })
      const context = await browser.newContext(USER_AGENT)
      const page = await context.newPage()
      await page.goto(FeedConfig.mundoUrl)

      let mundoNews = []

      await page.waitForSelector('a.ue-c-cover-content__link')
      const links = await page.$$('a.ue-c-cover-content__link')

      for (const link of links) {
        const href = await link.getAttribute('href')
        if (!href) continue
        const h2 = await link.$('h2.ue-c-cover-content__headline')
        if (h2) {
          const text = await h2!.innerText()
          mundoNews.push({
            newspaper: FeedConfig.mundoName as NewspaperType,
            href,
            text
          })
        } else continue
      }

      await browser.close()

      this.feeds = mundoNews
    } catch (err) {
      if (err instanceof playwright.errors.TimeoutError) return 'Timeout'
      return err
    }
  }

  async scrapElPais() {
    try {
      const browser = await playwright.chromium.launch({ headless: true })
      const context = await browser.newContext(USER_AGENT)
      const page: Page = await context.newPage()
      await page.goto(FeedConfig.paisUrl)

      const paisNews: PostFeedInterface[] = await page.evaluate(() => {
        let elements = document.querySelectorAll('h2 > a')
        return Array.from(elements).map(element => {
          return {
            newspaper: FeedConfig.paisName,
            href: element.getAttribute('href') ?? '',
            text: element.textContent ?? ''
          }
        })
      })

      await browser.close()

      this.feeds = paisNews
    } catch (err) {
      if (err instanceof playwright.errors.TimeoutError) return 'Timeout'
      return err
    }
  }
}

export default ScrapService
