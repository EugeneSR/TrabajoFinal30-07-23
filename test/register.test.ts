import { driverInstance } from "../src/core/driver";
import { RegisterPage } from "../src/pages/register.page";
import { TESTDATA } from "../data.app";
import dotenv from 'dotenv';
import { mainHeader } from "../src/pages/components/MainHeaderPage";
dotenv.config({ path: `.env.test`, override: true });

declare const reporter:any;

describe('Feature My Store: Register Account', () => {

    let registerPage: RegisterPage;

    beforeAll(async () => {
        await driverInstance.startDriver();
        registerPage = new RegisterPage();

    }, 50000);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        const url = String(process.env.URL);
        await registerPage.navigateTo(url);
    });

    it('Register: the user registers successfully', async () => {

        reporter
        .description("Login into https://automationexercise.com/")  
        .story("BOND-103");

        await registerPage.clickLink();  //Select icon Login, but option register

        await registerPage.registerUserName(TESTDATA.userName);
        await registerPage.registerEmail(TESTDATA.email);
        
        await registerPage.clickButtonRegisterAccount(); //

        await registerPage.createInformationAccount(TESTDATA.gender,TESTDATA.password,
        TESTDATA.day, TESTDATA.month, TESTDATA.year, TESTDATA.firstNames,TESTDATA.lastNames,
        TESTDATA.company, TESTDATA.address1, TESTDATA.address2, TESTDATA.state, TESTDATA.city, TESTDATA.zipCode,TESTDATA.movilNumber);
        
        await registerPage.selectCountry("India");

        await registerPage.clickCreateAccountButton();
        
        const message = await mainHeader.showMessageSuccess();//get message  success

         //**********************EXPECT*************************************/
        
         expect(message).toEqual("Congratulations! Your new account has been successfully created!"); // Logged in user name: Maxx
      
         //**********************END *************************************/

        const screenshotBuffer = await driverInstance.Page.screenshot();
        reporter.addAttachment("Screenshot", screenshotBuffer, "image/png");

    });

});