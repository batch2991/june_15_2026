import {Given,When,Then, setDefaultTimeout} from "@cucumber/cucumber"
import {expect} from "@playwright/test";
import { MyWorld } from "../commons/MyWorld";
import {ENV} from "../utils/config"

Given('i am on the login page', async function(this:MyWorld) { 
  await this.loginPage.openURL(ENV.URL)
});

When('i will enter valid userid and valid pwd and click login', async function (this:MyWorld) {
   await this.loginPage.login(ENV.UID,ENV.PWD)
});

Then('i should be navigated to dashboard page', async function (this:MyWorld) {
  let status=await this.productsPage.getProductHeading()
  expect(status).toBeTruthy()  
});