
class CartPage
{
    async removeProduct()
    {
        console.log("code to remove product form cart")
        await this.page.waitForTimeout(3000)
        await this.page.getTitle()
        console.log("product removed from cart")
    }
    getproductsinCart()
    {
        console.log("to get products")
        console.log("hello")
    }    
}