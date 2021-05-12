import {
  LitElement,
  html,
  css,
} from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object },
    };
  }

  // din kode her
  constructor() {
    user = new FormData(e.EditUser);
    fetch("api/updateUser.php", {
      method: "POST",
      credentials: "include",
      body: user,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.status);
      });
  }
}
customElements.define("edit-user", EditUser);
