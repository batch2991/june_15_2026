import { Base } from "./BasePage"

export class ProductsPage extends Base {

    private readonly heading: string = "//span[.='Products']"
    
    async getProductHeading() {
        await this.page.waitForTimeout(3000)
        return await this.page.locator(this.heading).isVisible()
    }    
}
