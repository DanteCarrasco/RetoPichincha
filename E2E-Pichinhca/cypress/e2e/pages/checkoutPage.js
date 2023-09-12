// Definir la clase que representa la página del proceso de pago
export default class CheckoutPage {
    // Definir los selectores de los elementos de la página
    get guestCheckoutOption() {
      return cy.get(':nth-child(4) > label > input');
    }
    get continueButton() {
      return cy.get("#button-account");
    }
    get firstNameInput() {
      return cy.get("#input-payment-firstname");
    }
    get lastNameInput() {
      return cy.get("#input-payment-lastname");
    }
    get emailInput() {
      return cy.get("#input-payment-email");
    }
    get phoneInput() {
      return cy.get("#input-payment-telephone");
    }
    get addressInput() {
      return cy.get("#input-payment-address-1");
    }
    get cityInput() {
      return cy.get("#input-payment-city");
    }
    get countrySelect() {
      return cy.get("#input-payment-country");
    }
    get regionSelect() {
      return cy.get("#input-payment-zone");
    }
    get postalCodeInput() {
      return cy.get("#input-payment-postcode");
    }
  
    fillBillingDetails(data) {
      // Llenar los datos de facturación con el objeto data
      this.firstNameInput.type(data.firstName);
      this.lastNameInput.type(data.lastName);
      this.emailInput.type(data.email);
      this.phoneInput.type(data.phone);
      this.addressInput.type(data.address);
      this.cityInput.type(data.city);
      this.countrySelect.select(data.country);
      this.regionSelect.select(data.region);
      this.postalCodeInput.type(data.postalCode);
    }
    continueToDelivery() {
      // Continuar al paso de entrega
      cy.get("#button-guest").click();
    }
    continueToPayment() {
      // Continuar al paso de pago
      cy.get("#button-shipping-method").click();
      cy.get('#collapse-payment-method > .panel-body > :nth-child(3) > label > input').click();
    }
    agreeTermsAndConditions() {
      // Aceptar los términos y condiciones
      cy.get("input[type='checkbox'][name='agree']").check();
    }
    continueToConfirm() {
      // Continuar al paso de confirmación
      cy.get("#button-payment-method").click();
    }
    confirmOrder() {
      // Confirmar el pedido
      cy.get("#button-confirm").click();
      cy.visitInSameTab("http://opencart.abstracta.us/index.php?route=checkout/success");
    }
    verifyOrderConfirmation() {
      // Verificar que se muestra el mensaje de confirmación
      cy.get("#content > h1").should("have.text", "Your order has been placed!");
    }
  }