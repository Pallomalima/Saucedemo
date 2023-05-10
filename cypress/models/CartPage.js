import {CART_ITEM, REMOVE_FROM_CART_BUTTON  } from '../selectors/selectors';

class CartPage {
    get cartItem() {
        return cy.get(CART_ITEM);
    }

    get removeBikeLightButton() {
        return cy.get(REMOVE_FROM_CART_BUTTON);
    }

    validateCartHasOneItem() {
        this.cartItem.should('have.length', 1);
    }

    validateCartHasTwoItems() {
        this.cartItem.should('have.length', 2);
    }

    removeBikeLightFromCart() {
        this.removeBikeLightButton.click();
    }
}
  
export default CartPage;