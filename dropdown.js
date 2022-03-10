describe('operations',function(){

    function Calculation(a,b,c)
    {
        element(by.model("first")).sendKeys(a)
        
        element.all(by.tagName("option")).each(function(item)
        {
            item.getAttribute("value").then(function(values)
            {
                if(values==c)
                {
                    item.click()

                }
            })
        })
        element(by.model("second")).sendKeys(b)
        element(by.id("gobutton")).click()
    }
    it('dropdown',function()
    {
        browser.get('http://juliemr.github.io/protractor-demo/')
       
        Calculation(39,4,"MULTIPLICATION")
        Calculation(4,4,"DIVISION")
        Calculation(67,4,"SUBTRACTION")
        element.all(by.repeater("result in memory")).each(function(item)
        {
            item.element(by.css('td:nth-child(3)')).getText().then(function(result)
            {
                console.log(result)
            })
        })
        
    
    })
    })