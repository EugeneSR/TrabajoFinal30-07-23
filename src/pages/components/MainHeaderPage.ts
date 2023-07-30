
import { BasePage } from "../base.page";

class MainHeaderPage extends BasePage {

    // Locators    
    private successMessage: string = "//p[text()='Congratulations! Your new account has been successfully created!']";
    private UserLogued="b";

    constructor() {
        super();
    }

    async getElementText() {
        return await this.driver.Page.textContent(this.UserLogued)

    }
    async showMessageSuccess() {
        return await this.driver.Page.textContent(this.successMessage);

    }
}

export const mainHeader = new MainHeaderPage();

