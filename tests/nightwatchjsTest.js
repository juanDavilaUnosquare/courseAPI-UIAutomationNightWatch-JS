module.exports = {
    '@tags' : ["night"],
    'Demo test nightwatch' : function(browser) {
     const apiReferenceMenu = "div#navigation a[href='/api/']";
     const globalSearchInput = '#docsearch';
     const searchFromComponent = '#docsearch-input';
     const fistElement = '#docsearch-item-0';
     const apiReferenceHeader = "li a[href='/api/']"
     const blogHeader = "li a[href='https://nightwatchjs.org/blog/']"
     const apiCommandsHeader = "button a[href='/api/commands/']"
     const footerTextLocator = ".footer-text";

     const textToValidateBlog = "Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy;"


      browser
      .windowMaximize()
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
      .click(apiReferenceMenu)
      .click(globalSearchInput)
      .setValue(searchFromComponent, "Asserts")
      .waitForElementVisible('.DocSearch-Hit')
      /*.elements('css selector', '.DocSearch-Hit a div',function (elements){
        listOfElements=elements.value;
        console.log("listOfElements: "+ Object.keys(listOfElements[0]));
        this.elementIdClick(Object.keys(listOfElements[0]).toString());
      });*/
      .click(fistElement)
      .waitForElementVisible(apiReferenceHeader)
      .click(apiReferenceHeader);
      
      
      browser
      .assert.visible(apiCommandsHeader, '"API Commands" side bar exists')
      .click(blogHeader)
      .moveToElement(footerTextLocator,0,0)
      .getText(footerTextLocator, function(result){
          console.log(result);
      })
      .assert.textContains(footerTextLocator, textToValidateBlog)
      .saveScreenshot('tests_output/watch.png')
      .end();
    }
};