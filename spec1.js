describe('Protractor',function(){
    var obj=  require("./locators.js")
    var testdata=  require("./data.js")
    var using = require("jasmine-data-provider")
using(testdata.datadriven ,function(data,description) {
it('basics'+description ,function()
{
    obj.getURL()
   
    obj.firstinput.sendKeys(data.firstinput)
    obj.secondinput.sendKeys(data.secondinput)
    obj.goButton.click()
    expect(obj.result.getText()).toBe(data.result)
    obj.result.getText().then(function(additionValue)
    {
       console.log("result is "+additionValue)
        //expect(additionValue).toBe(data.result)
    
    })


})
})
})