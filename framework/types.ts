import { World as CucumberWorld } from "@cucumber/cucumber";
import { PlaywrightFluent } from "playwright-fluent";

export interface PlaywrightContext extends CucumberWorld {
    p: PlaywrightFluent;
}