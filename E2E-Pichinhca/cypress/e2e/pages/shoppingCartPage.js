  // Definir la clase que representa la página del carrito de compras
  export default class ShoppingCartPage {
    // Definir los selectores de los elementos de la página
    get checkoutButton() {
      return cy.get('[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"] > strong');
    }
  
    // Definir los métodos para interactuar con la página
    checkout() {
      // Ir al proceso de pago
      this.checkoutButton.click();
    }
  }