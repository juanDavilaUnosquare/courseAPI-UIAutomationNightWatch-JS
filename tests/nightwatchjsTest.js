module.exports = {
    'Demo test nightwatch' : function(browser) {
      browser
      .windowMaximize()
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
      .end();
    }
};