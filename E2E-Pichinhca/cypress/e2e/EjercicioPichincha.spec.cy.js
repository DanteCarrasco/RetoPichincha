import CheckoutPage from "./pages/checkoutPage.js";
import HomePage from "./pages/homePage.js";
import ShoppingCartPage from "./pages/shoppingCartPage.js";


// Definir los datos de prueba
const data = {
  firstName: "Dante",
  lastName: "Carrasco",
  email: "dante.carrasco@gmail.com",
  phone: "912384261",
  address: "Av. Balta 123",
  city: "Chiclayo",
  country: "Peru",
  region: "Lambayeque",
  postalCode: "14007",
};


// Definir el escenario de prueba
describe("Comprar productos E2E test", () => {
  // Instanciar las clases de las páginas
  const homePage = new HomePage();
  const shoppingCartPage = new ShoppingCartPage();
  const checkoutPage = new CheckoutPage();

  // Definir los pasos del escenario
  it("Comprar dos productos y terminar el proceso de compra", () => {
    // Visitar la página principal
    homePage.visit();
    // Buscar el primer producto por su nombre
    homePage.searchProduct("iPhone");
    // Agregar el primer producto al carrito
    homePage.addProductToCart1();
    // Buscar el segundo producto por su nombre
    homePage.searchProduct("MacBook Air");
    // Agregar el segundo producto al carrito
    homePage.addProductToCart2();
    // Ir al carrito de compras
    homePage.showShoppingCart();
    // Ir al proceso de pago
    shoppingCartPage.checkout();
    // Elegir la opción de pago como invitado
    checkoutPage.guestCheckoutOption.click();
    checkoutPage.continueButton.click();
    // Llenar los datos de facturación con los datos de prueba
    checkoutPage.fillBillingDetails(data);
    // Continuar al paso de entrega
    checkoutPage.continueToDelivery();
    // Continuar al paso de pago
    checkoutPage.continueToPayment();
    // Aceptar los términos y condiciones
    checkoutPage.agreeTermsAndConditions();
    // Continuar al paso de confirmación
    checkoutPage.continueToConfirm();
    // Confirmar el pedido
    checkoutPage.confirmOrder();
    // Verificar que se muestra el mensaje de confirmación
    checkoutPage.verifyOrderConfirmation();
  });
});
