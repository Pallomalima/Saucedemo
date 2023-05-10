import {
  SHOPPING_CART_CONTAINER,
  ADD_TO_CART_BUTTON,
  SHOPPING_CART_BADGE,
  CONTINUE_SHOPPING_BUTTON,
  CART_ITEM,
  CART_ITEM_NAME,
  CART_ITEM_PRICE
  } from '../selectors/selectors';

class InventoryPage {

  selectSortOption(sortOption) {
    cy.get('.product_sort_container').select(sortOption)
  }

  verifyItemNameAndPrice(itemNumber, name, price) {
    cy.get(`.inventory_item:nth-child(${itemNumber}) .inventory_item_name`).should('contain', name)
    cy.get(`.inventory_item:nth-child(${itemNumber}) .inventory_item_price`).should('contain', price)
  }

  get shoppingCartContainer() {
    return cy.get(SHOPPING_CART_CONTAINER);
  }

  get cartItem() {
    return cy.get(CART_ITEM);
  }

  get continueShoppingButton() {
    return cy.get(CONTINUE_SHOPPING_BUTTON);
  }

  get shoppingCartBadge() {
    return cy.get(SHOPPING_CART_BADGE);
  }

  get addToCartButton() {
    return cy.get(ADD_TO_CART_BUTTON);
  }

  get cartItemName() {
    return cy.get(CART_ITEM_NAME);
  }

  get cartItemPrice() {
    return cy.get(CART_ITEM_PRICE);
  }

  addBackpackToCart() {
    this.addToCartButton.eq(0).click();
  }

  addBikeLightToCart() {
    this.addToCartButton.eq(1).click();
  }

  goToShoppingCart() {
    this.shoppingCartContainer.click();
  }

  validateCartHasOneItem() {
    this.cartItem.should('have.length', 1);
    this.cartItemName.should('contain', ITEMS[0].name);
    this.cartItemPrice.should('contain', ITEMS[0].price);
  }

  validateCartHasTwoItems() {
    this.cartItem.should('have.length', 2);
  }

  validateCartIsEmpty() {
    this.cartItem.should('not.exist');
  }

  validateShoppingCartBadge(count) {
    this.shoppingCartBadge.should('contain', count.toString());
  }

  continueShopping() {
    this.continueShoppingButton.click();
  }
  
}

export default InventoryPage;
