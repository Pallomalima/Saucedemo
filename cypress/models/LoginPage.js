import { BASE_URL} from '../constants/constants';
import { USERNAME_INPUT, PASSWORD_INPUT, LOGIN_BUTTON } from '../selectors/selectors';

export default class LoginPage {
  visit() {
    cy.visit(BASE_URL);
  }

  fillUsername(value) {
    cy.get(USERNAME_INPUT).type(value);
  }

  fillPassword(value) {
    cy.get(PASSWORD_INPUT).type(value);
  }

  submit() {
    cy.get(LOGIN_BUTTON).click();
  }
}
