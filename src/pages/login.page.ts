import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {

    /************Locators***************************/

    private linkLogin: string = "//a[contains(.,'Signup / Login')]";
    private email: string = "(//input[@name='email'])[1]";
    private password: string = "//input[@type='password']";
    private loginButton: string = "(//button[@class='btn btn-default'])[1]";

    constructor() {
        super();
    }

    async clickLink() {
        await ElementActions.click(this.linkLogin);
    }

   async setEmail(text: string) {
        await ElementActions.setText(this.email, text);
    }
    async setPassword(text: string) {
        await ElementActions.setText(this.password, text);
    }
    async clickLogin() {
        await ElementActions.click(this.loginButton);
    }

}
