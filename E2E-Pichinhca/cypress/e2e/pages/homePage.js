// Definir la clase que representa la página principal
export default class HomePage {
    // Definir los selectores de los elementos de la página
    get searchInput() {
      return cy.get("#search > input");
    }
    get searchButton() {
      return cy.get("#search > span > button");
    }
    get addToCartButton1() {
      return cy.get("[onclick=\"cart.add('40', '1');\"]");
    }
    get addToCartButton2() {
      return cy.get("[onclick=\"cart.add('44', '1');\"]");
    }
    get shoppingCartButton() {
      return cy.get("#cart > button");
    }
  
    // Definir los métodos para interactuar con la página
    visit() {
      // Visitar la URL de la página
      cy.visit("https://opencart.abstracta.us/");
    }
    searchProduct(product) {
      // Buscar un producto por su nombre
      this.searchInput.clear().type(product);
      this.searchButton.click();
    }
    addProductToCart1() {
      // Agregar el primer producto encontrado al carrito
      this.addToCartButton1.first().click();
      // Esperar a que aparezca el mensaje de éxito
      cy.get(".alert-success").should("be.visible");
    }
    addProductToCart2() {
      // Agregar el primer producto encontrado al carrito
      this.addToCartButton2.first().click();
      // Esperar a que aparezca el mensaje de éxito
      cy.get(".alert-success").should("be.visible");
    }
    showShoppingCart() {
      // Ver al carrito de compras
      this.shoppingCartButton.click();
    }
  }