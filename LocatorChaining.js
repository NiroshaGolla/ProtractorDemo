describe('Locator chaining',function()
{
    function Add(a,b)
    {
        element(by.model("first")).sendKeys(a)
        element(by.model("second")).sendKeys(b)
        element(by.id("gobutton")).click()
    }
    it('chainLocators',function(){

        browser.get('http://juliemr.github.io/protractor-demo/')
        Add(3,5)
        Add(5,7)
        Add(7,2)
        
        element(by.repeater("result in memory")).element(by.css('td:nth-child(3)')).getText().then(function(result)
        {
            console.log(result)
        })


        element(by.repeater("result in memory")).count().then(function(count1)
        {
            console.log(count1)
        })


        element.all(by.repeater("result in memory")).each(function(item)
        {
            item.element(by.css('td:nth-child(3)')).getText().then(function(result)
            {
                console.log(result)
            })
        })
    


        
    
    })
})