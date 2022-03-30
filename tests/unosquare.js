module.exports = {
    'Demo test unosquare' : function(browser) {
      browser
      .windowMaximize()
      .url('https://www.unosquare.com')
      .waitForElementVisible('body')
      .assert.attributeContains("a.navbar-brand img", "alt", "Unosqu")
      .assert.attributeEquals("a.navbar-brand img", "alt", "Unosquare")
      .verify.cssProperty(".navbar-brand", "height", "74px")
      .assert.not.valueEquals(".navbar-brand", "X")
      .assert.visible(".navbar-brand")
      .assert.title("Digital Transformation Services | Agile Staffing Solutions | Unosquare")
      .assert.urlContains("unosquare")
      .end();
    }
  };