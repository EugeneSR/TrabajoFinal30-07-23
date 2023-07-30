import { BasePage } from "../base.page";
import { ElementActions } from "../../core/element-actions";

class MainPurchasePage extends BasePage {

    // Locators    
    private successMessage: string = "//p[text()='Congratulations! Your order has been confirmed!']";
   

    constructor() {
        super();
    }

    async showMessageSuccess() {

        return await this.driver.Page.textContent(this.successMessage);
    }
 

}

export const mainPurchase = new MainPurchasePage();