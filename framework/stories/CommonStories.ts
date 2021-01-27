import { PlaywrightFluent, Story, StoryWithProps } from 'playwright-fluent';
import {expect} from 'chai';

interface ExpectedProps{
    url?: string;
    selector?: string;
    text?: string;
}

export class BaseStories{

    protected openApplication: StoryWithProps<ExpectedProps> = async (p: PlaywrightFluent, props: ExpectedProps) => {
        props.url && await p.navigateTo(`https://${props.url}`);
    }

    protected typeIntoInputText: StoryWithProps<ExpectedProps> = async (p: PlaywrightFluent, props: ExpectedProps) => {
        props.selector && props.text && await p.click(props.selector).typeText(props.text);
    }

    protected clickOnElement: StoryWithProps<ExpectedProps> = async (p: PlaywrightFluent, props: ExpectedProps) => {
        props.selector && await p.click(props.selector);
    }

}