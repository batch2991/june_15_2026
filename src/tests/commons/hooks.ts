import { setDefaultTimeout, Before, After, AfterStep } from "@cucumber/cucumber";
import { MyWorld } from "./MyWorld";
import { chromium } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";


setDefaultTimeout(30000)
Before(async function (this: MyWorld) {
  this.browser = await chromium.launch({ headless: false })
  this.context = await this.browser.newContext({
    recordVideo: {
      "dir": "./reports/videos",
      size: { width: 1280, height: 720 }
    }
  })
  this.page = await this.context.newPage()

  this.loginPage = new LoginPage(this.page)
  this.productsPage = new ProductsPage(this.page)

})

After(async function (this: MyWorld, { pickle, result }) {
  // if(result?.status==Status.FAILED)
  // {

  // }
  let pic = await this.page.screenshot({ path: "./reports/images/" + pickle.name + ".png" })
  this.attach(pic, "image/png")

  const video = this.page.video();
  await this.context.close();
  if (video) {
    const path = await video.path();
    const fs = require("fs");
    const videoBuffer = fs.readFileSync(path);
    this.attach(videoBuffer, "video/webm");
  }

  this.browser.close()
})

AfterStep(async function({result,pickleStep}){
     console.log("hello")
})

/*
Before()    : Before Every scenario
After()     : After every scenario
BeforeAll() : only one time for the project before all the scenarios
AfterAll()  : only one time for the project after all the scenarios

BeforeStep() : Before every step in the scearnio
AfterStep() : after every step in the scenario
*/