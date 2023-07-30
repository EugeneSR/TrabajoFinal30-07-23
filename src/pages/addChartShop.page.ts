import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";


export class AddChartShopPage extends BasePage {

    /************Locators***************************/

    private linkProduct: string="(//ul[@class='nav navbar-nav']//a)[2]"; 

    private viewProduct1: string="(//i[@class='fa fa-plus-square'])[1]";
    private quantity1:string="#quantity";

    private addToCart1:string="(//button[contains(@class,'btn btn-default')])[1]";
    private continueShopping:string="//button[contains(@class,'btn btn-success')]";

    private viewProduct2: string="(//i[@class='fa fa-plus-square'])[2]";

    private viewProduct3:string="(//i[@class='fa fa-plus-square'])[3]";
    
    private viewCart:string="//p[@class='text-center']//u[1]"; //Para ver la cola de compras
    private viewIconCart:string="(//ul[@class='nav navbar-nav']//a)[3]"//Link Carts
    private checkout:string="//a[contains(text(),'Proceed To Checkout')]"; //Proceed to checkout
    private checkoutLogin:string="//u[text()='Register / Login']"; //Para acceder a la autentificación
    private placeOrder:string="//a[contains(@class,'btn btn-default')]"; //place Order button
    private placeOrderProduct:string="//a[contains(text(),'Place Order')]" //Pace Order 2
    private nameCard:string="//input[@data-qa='name-on-card']"; //Nombre tarjeta  *****
    private cardNumber:string="//input[@class='form-control card-number']"; // //card number
    private cvc:string="//input[@data-qa='cvc']";
    private expirationMonthCard:string="//input[@class='form-control card-expiry-month']";
    private expirationYearCard:string="//input[@class='form-control card-expiry-year']";

    private payButton:string="//button[@data-qa='pay-button']"; //pagar con tarjeta button

    private downloadInvoices:string = "//a[contains(text(),'Download Invoice')]";

    constructor() {
        super();
    }
    async linkProducts(){
        await ElementActions.click(this.linkProduct);
    }

    async buttonViewProduct1() {
        await ElementActions.click(this.viewProduct1);
      
    }
    async buttonAddToCart() {
        await ElementActions.click(this.addToCart1);
      
    }
    async buttonContinueAddShopping() {
        await ElementActions.click(this.continueShopping);
       
    }
/***Product 2  */
    async buttonViewProduct2() {
        await ElementActions.click(this.viewProduct2);
      
    }
/***Product 3  */
async buttonViewProduct3() {
    await ElementActions.click(this.viewProduct3);
  
}
 
    async setQuantity(text: string) {
        
          await  ElementActions.setText(this.quantity1,text);
        
    }
    async buttonViewCartShop() {   //link  cart
        await ElementActions.click(this.viewCart);
    }
    async buttonViewCheckout() {
        await ElementActions.click(this.checkout);
    }
    async buttonViewRegisterLogin() {
         await ElementActions.click(this.checkoutLogin);
     }
    //View Icon Cart
    async buttonviewIconCart() {
        await ElementActions.click(this.viewIconCart);
    }
     async buttonProceddToCheckout(){ //cuando ya esta autentificado ordenar 2 veces
         await ElementActions.click(this.placeOrder);
     }
     async buttonPlaceOrder(){ //despues del checkout
        await ElementActions.click(this.placeOrderProduct);
    }

    async setNameCard(text: string){ 
        await ElementActions.setText(this.nameCard, text);
    
    }
    async setCardNumber(text: string){ 
        await ElementActions.setText(this.cardNumber, text);
    
    }
    async setCVC(text: string){ 
        await ElementActions.setText(this.cvc, text);
    
    }
    async setExpirationMonthCard(text: string){ 
        await ElementActions.setText(this.expirationMonthCard, text);
    
    }
    async setExpirationYearCard(text: string){ 
        await ElementActions.setText(this.expirationYearCard, text);
    
    }
    async buttonPayConfirmOrder(){ 
        await ElementActions.click(this.payButton);
    
    }
    async buttonDownloadBill(){ 
        await ElementActions.click(this.downloadInvoices);
    
    }

}
