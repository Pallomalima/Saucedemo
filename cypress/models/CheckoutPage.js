import { CHECKOUT_BUTTON, 
    CHECKOUT_FIRST_NAME_INPUT, 
    CHECKOUT_LAST_NAME_INPUT,
    CHECKOUT_ZIP_CODE_INPUT,
    CHECKOUT_CONTINUE_BUTTON,
    CART_ITEM_NAME,
    CART_ITEM_PRICE,
    CHECKOUT_FINISH_BUTTON,
    CHECKOUT_COMPLETE_MESSAGE,
    ERROR_MESSAGE
 } from '../selectors/selectors';

export default class CheckoutPage {
  clickCheckoutButton() {
    cy.get(CHECKOUT_BUTTON).click();
  }

  enterFirstName(firstName) {
    cy.get(CHECKOUT_FIRST_NAME_INPUT).type(firstName);
  }

  enterLastName(lastName) {
    cy.get(CHECKOUT_LAST_NAME_INPUT).type(lastName);
  }

  enterZipCode(zipCode) {
    cy.get(CHECKOUT_ZIP_CODE_INPUT).clear().type(zipCode);
  }

  clickContinueButton() {
    cy.get(CHECKOUT_CONTINUE_BUTTON).click();
  }

  getCartItemName() {
    return cy.get(CART_ITEM_NAME);
  }

  getCartItemPrice() {
    return cy.get(CART_ITEM_PRICE);
  }

  clickFinishButton() {
    cy.get(CHECKOUT_FINISH_BUTTON).click();
  }

  getCompleteMessage() {
    return cy.get(CHECKOUT_COMPLETE_MESSAGE);
  }

  assertErrorMessage(message) {
    return cy.get(ERROR_MESSAGE).should('be.visible').contains(message);
  }

  assertZipCodeValue(expectedValue) {
    cy.get(CHECKOUT_ZIP_CODE_INPUT).should('have.value', expectedValue);
  }

}

