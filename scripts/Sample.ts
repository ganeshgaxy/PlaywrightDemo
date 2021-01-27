import {Given, Then, When} from '@cucumber/cucumber';
import { PlaywrightContext } from "../framework/types";

import {Base} from '../framework/core/BaseDriver';

//#region Objects
const pageBase = new Base();
//#endregion

//#region Locators
const searchInputTextSelector = 'input[name="search"]';
const searchBtnSelector = 'text="Search"'
//#endregion

//#region Steps
Given('Open {string}', async function (this: PlaywrightContext, url: string){
    await pageBase.navigateTo(this, url);
})

Then('Search for {string}', async function (this: PlaywrightContext, searchText: string){
    await pageBase.typeInto(this, searchInputTextSelector, searchText);
})

Then('Click on Search', async function (this: PlaywrightContext){
    await pageBase.clickOn(this, searchBtnSelector);
})
//#endregion