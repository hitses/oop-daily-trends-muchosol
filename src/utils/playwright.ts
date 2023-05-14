import playwright from 'playwright'
import { Page } from '@playwright/test'
import { FeedConfig, USER_AGENT } from '../interfaces/enums'
import { NewspaperType, PostFeedInterface } from '../interfaces/types'

class ScrapService {
  private scrapNews: PostFeedInterface[] = []

  async scrap(url: string, selector: string) {
    try {
      const browser = await playwright.chromium.launch({ headless: true })
      const context = await browser.newContext(USER_AGENT)
      const page: Page = await context.newPage()
      await page.goto(url)

      await page.waitForSelector(selector)
      const links = await page.$$(selector)

      for (const link of links) {
        const href = await link.getAttribute('href')
        if (!href) continue

        if (href.includes(FeedConfig.mundoUrl)) {
          const h2 = await link.$(FeedConfig.h2MundoSelector)
          if (h2) {
            const text = await h2!.innerText()
            this.scrapNews.push({
              newspaper: FeedConfig.mundoName as NewspaperType,
              href,
              text
            })
          } else continue
        } else {
          const text = await link.innerText()
          if (!text) continue

          this.scrapNews.push({
            newspaper: FeedConfig.paisName as NewspaperType,
            href,
            text
          })
        }
      }

      await browser.close()

      return this.scrapNews
    } catch (err) {
      if (err instanceof playwright.errors.TimeoutError) return 'Timeout'
      return err
    }
  }
}

export default ScrapService
