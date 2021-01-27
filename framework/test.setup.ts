// test.setup.ts
import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber";
import { devices, chromium } from "playwright";
import { PlaywrightFluent } from "playwright-fluent";
import { PlaywrightContext } from "./types";

setDefaultTimeout(120*1000);

BeforeAll(async function () {  
    // Browsers are expensive in Playwright so only create 1  
    //console.log('Before All');
});

AfterAll(async function () {  
    //console.log('After All');
});

// Create a new test context and page per scenario
Before(async function (this: PlaywrightContext) {  
    this.p = new PlaywrightFluent()
      .withBrowser('chromium')
      .withCursor()
      .withOptions({ headless: false });
});

Before({tags: '@ignore'}, async function () {
});

// Cleanup after each scenario
After(async function (this: PlaywrightContext) { 
    await this.p.close();
});