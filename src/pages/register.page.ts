import { BasePage } from "./base.page";
import { ElementActions } from "../core/element-actions";

export class RegisterPage extends BasePage {

    //---------Locators--------------------------
    
    private linkRegister: string = "//a[contains(.,'Signup / Login')]";
    private usernameRegisteAccount: string = "//input[@data-qa='signup-name']";
    private emailRegisterAccount: string = "//input[@data-qa='signup-email']";
    private buttonSignup: string = "(//button[@class='btn btn-default'])[2]";


    /*Locators de la Interfaz Register */
    private genderMrs: string="//div[@id='uniform-id_gender2']//input[1]";
    private genderMr:string ="//div[@id='uniform-id_gender1']//input[1]";
    
    private password: string = "//input[@type='password']";
    private day: string = "#days";
    private month: string = "#months";
    private year: string = "#years";

    private newsletter: string = "#newsletter";
    private offers: string = "#optin";

    /******Address Information*/

    private firstNames: string="#first_name";
    private lastNames: string="#last_name";
    private company: string="#company";
    private address1: string="#address1";
    private address2: string="#address2";
    private country: string="#country";
    private state: string="#state";
    private city: string="#city";
    private zipCode: string="#zipcode";
    private movilNumber: string="#mobile_number";
    private buttonRegisterAccount: string = "(//button[@class='btn btn-default'])[1]";
   
    constructor() {
        super();
    }
    async createInformationAccount(gender: string, password: string, day: string, month: string, year: string, firstNames: string , lastNames: string, 
        company:string, address1:string, address2:string, state:string, city:string, zipCode:string, movilNumber:string) {
        if (gender === 'Mr') {
            await ElementActions.click(this.genderMr);

        } else if (gender === 'Mrs') {
            await ElementActions.click(this.genderMrs);
        }
     
        await ElementActions.setText(this.password, password);
        await ElementActions.selectOptionByValue(this.day, day);
        await ElementActions.selectOptionByValue(this.month, month);
        await ElementActions.selectOptionByValue(this.year, year);

        await ElementActions.check(this.newsletter); //is checked for default
        await ElementActions.check(this.offers);  //is checked for default 

        await ElementActions.setText(this.firstNames, firstNames);
        await ElementActions.setText(this.lastNames, lastNames);
        await ElementActions.setText(this.company,company);
        await ElementActions.setText(this.address1, address1);
        await ElementActions.setText(this.address2 , address2);

        await ElementActions.setText(this.state, state);
        await ElementActions.setText(this.city, city);
        await ElementActions.setText(this.zipCode, zipCode);
        await ElementActions.setText(this.movilNumber, movilNumber);  
    }

    //Country
    async selectCountry(text: string){
        await ElementActions.selectOption(this.country,text);
    }
    async clickCreateAccountButton() {
        await ElementActions.click(this.buttonRegisterAccount);

    }
   
    async clickLink() {
        await ElementActions.click(this.linkRegister);
    }
    async registerEmail(text: string) {

        await ElementActions.setText(this.emailRegisterAccount, text);
    }
    async registerUserName(text: string) {
        await ElementActions.setText(this.usernameRegisteAccount,text);
    }
  
    async clickButtonRegisterAccount(){
        await ElementActions.click(this.buttonSignup);
    }

};