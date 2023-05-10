import LoginPage from '../models/LoginPage';
import InventoryPage from '../models/InventoryPage';
import CartPage from '../models/CartPage';
import CheckoutPage from '../models/CheckoutPage';
import { BASE_URL, STANDARD_USER, PASSWORD, SORT_OPTIONS, ITEMS } from '../constants/constants';
  
describe('Virtual store test', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    loginPage.visit(BASE_URL);
    loginPage.fillUsername(STANDARD_USER);
    loginPage.fillPassword(PASSWORD);
    loginPage.submit();

  });

  it('Login and verify items in stock', () => {
    ITEMS.forEach((item, index) => {
      inventoryPage.verifyItemNameAndPrice(index + 1, item.name, item.price);
    });
  });

  it('Verifies item sorting', () => {
    inventoryPage.selectSortOption(SORT_OPTIONS.Z_TO_A);
    inventoryPage.verifyItemNameAndPrice(1, ITEMS[5].name, ITEMS[5].price);
    inventoryPage.selectSortOption(SORT_OPTIONS.LOW_TO_HIGH);
    inventoryPage.verifyItemNameAndPrice(1, ITEMS[4].name, ITEMS[4].price);
    inventoryPage.selectSortOption(SORT_OPTIONS.HIGH_TO_LOW);
    inventoryPage.verifyItemNameAndPrice(1, ITEMS[3].name, ITEMS[3].price);
  });

  it('should add and remove items from cart', () => {
    inventoryPage.goToShoppingCart();
    inventoryPage.validateCartIsEmpty();
    inventoryPage.continueShopping();
    inventoryPage.addBackpackToCart();
    inventoryPage.validateShoppingCartBadge(1);
    inventoryPage.goToShoppingCart();
    cartPage.validateCartHasOneItem();
    inventoryPage.continueShopping();
    inventoryPage.addBikeLightToCart();
    inventoryPage.validateShoppingCartBadge(2);
    inventoryPage.goToShoppingCart();
    cartPage.validateCartHasTwoItems();
    cartPage.removeBikeLightFromCart();
    cartPage.validateCartHasOneItem();
  });


  it('should complete checkout', () => {
    inventoryPage.addBackpackToCart();
    inventoryPage.goToShoppingCart();
  
    checkoutPage.clickCheckoutButton();
  
    checkoutPage.enterFirstName('Palloma');
    checkoutPage.enterLastName('Lima');
    checkoutPage.enterZipCode('12345');
    checkoutPage.clickContinueButton();
  
    checkoutPage.getCartItemName().should('have.length', 1);
    checkoutPage.getCartItemName().should('contain', ITEMS[0].name);
    checkoutPage.getCartItemPrice().should('contain', ITEMS[0].price);
    checkoutPage.clickFinishButton();
  
    checkoutPage.getCompleteMessage().should('contain', 'Thank you for your order!');
  });
  
  it('should show error messages for required fields', () => {
    inventoryPage.addBackpackToCart();
    inventoryPage.goToShoppingCart();

    checkoutPage.clickCheckoutButton();
    checkoutPage.clickContinueButton();
    checkoutPage.assertErrorMessage('Error: First Name is required');

    checkoutPage.enterFirstName('Palloma');
    checkoutPage.clickContinueButton();
    checkoutPage.assertErrorMessage('Error: Last Name is required');

    checkoutPage.enterLastName('Lima');
    checkoutPage.clickContinueButton();
    checkoutPage.assertErrorMessage('Error: Postal Code is required');
  })

  it('Should show an error message if the first name field has more than one word', () => {
    const firstName = 'Palloma Lira';
    const lastName = 'Lima';
    const zipCode = '12345';

    inventoryPage.addBackpackToCart();
    inventoryPage.goToShoppingCart();
  
    checkoutPage.clickCheckoutButton();
  
    checkoutPage.enterFirstName(firstName);
    checkoutPage.enterLastName(lastName);
    checkoutPage.enterZipCode(zipCode);
    checkoutPage.clickContinueButton();
    checkoutPage.assertErrorMessage('Error: First Name must be only letters');
  });

  it('should display error message when first name starts with a number', () => {

    const firstName = '123Palloma';
    const lastName = 'Lima';
    const zipCode = '12345';

    inventoryPage.addBackpackToCart();
    inventoryPage.goToShoppingCart();

    checkoutPage.clickCheckoutButton();
  
    checkoutPage.enterFirstName(firstName);
    checkoutPage.enterLastName(lastName);
    checkoutPage.enterZipCode(zipCode);
    checkoutPage.clickContinueButton();
    checkoutPage.assertErrorMessage('Error: First Name must start with a letter');
  })
  
  it('should accept only 8 digits on zip code', () => {
    const validCep = '02167000'
    const invalidCep1 = '0216700'
    const invalidCep2 = '021670009'

    inventoryPage.addBackpackToCart();
    inventoryPage.goToShoppingCart();

    checkoutPage.clickCheckoutButton();
  
    checkoutPage.enterZipCode(validCep);
    checkoutPage.assertZipCodeValue(validCep);

    checkoutPage.enterZipCode(invalidCep1);
    checkoutPage.assertZipCodeValue(invalidCep1);

    checkoutPage.enterZipCode(invalidCep2);
    checkoutPage.assertZipCodeValue(validCep);
  })
});
