import { BaseStories } from "../stories/CommonStories";
import { PlaywrightContext } from "../types";

export class Base extends BaseStories{

    async navigateTo(context: PlaywrightContext, url: string){
        await context.p.runStory(this.openApplication, { url:url});
    }

    async typeInto(context: PlaywrightContext, selector: string, text: string){
        await context.p.runStory(this.typeIntoInputText, { selector: selector, text: text});
    }

    async clickOn(context: PlaywrightContext, selector: string){
        await context.p.runStory(this.clickOnElement, {selector: selector});
    }

}