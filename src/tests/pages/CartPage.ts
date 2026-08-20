
class CartPage
{
    async removeProduct()
    {
        console.log("code to remove product form cart")
        await this.page.waitForTimeout(3000)
        console.log("product removed from cart")
    }
}