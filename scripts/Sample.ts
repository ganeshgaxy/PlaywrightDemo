import {Given, Then, When} from '@cucumber/cucumber';
import { OurWorld } from "../framework/types";

Given('Open {string}', async function (this: OurWorld, url: string){
    await this.page.goto(`https:\\${url}`);
})

Then('Search for {string}', async function (this: OurWorld, searchText: string){
    await this.page.fill('input[name="search"]',searchText);
})

Then('Click on Search', async function (this: OurWorld){
    await this.page.click('text="Search"');
})