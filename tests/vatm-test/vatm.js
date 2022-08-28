module.exports = {
  "projects test": function (browser) {
    browser
      .url("http://localhost:8000/signin")
      .maximizeWindow()
      .click("#input-15")
      .setValue("#input-15", "sumit.p@triofi.in")
      .setValue("#input-19", "admin@1234")
      .click(
        "#app > div > div > div > div > div > form > div.v-card__actions > button"
      )
      .pause(2000)

      .click(
        "#app > div.v-application--wrap > div > header > div > button.v-icon.notranslate.mx-3.v-icon--link.mdi.mdi-apps.theme--dark.primaryText--text"
      )
      .pause(5000)
      .click(
        "#list-item-263 > div > div:nth-child(2) > div:nth-child(4) > div > div > div > div > div:nth-child(1)"
      );
      
  },
};
