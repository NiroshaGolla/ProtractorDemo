describe('Protractor ',function() 
{
    function Additem(productName)
    {
        element.all(by.css("[class='col-lg-3 col-md-6 mb-3']")).each(function(item)
        {
            item.element(by.css('h4[class="card-title"]')).getText().then(function(result)
            {
                if(result==productName)
                {
                    item.element(by.css('button[class="btn btn-info"]')).click()
                }
            })
        })
    }

    it('Protractor Tutorial',function()
     {
        browser.get('https://rahulshettyacademy.com/angularpractice/')
        element(by.name('name')).sendKeys('Nirosha')
        element(by.name('email')).sendKeys('nirosha@gmail.com')
        element(by.id('exampleInputPassword1')).sendKeys('Niro@123')
        element(by.css('input[type="checkbox"]')).click()
        element(by.cssContainingText('[id="exampleFormControlSelect1"] option',"Female")).click()
        element.all(by.name('inlineRadioOptions')).first().click()
        element(by.buttonText('Submit')).click().then(function()
        {
            element(by.css('div[class*="success"]')).getText().then(function(sucessmessage)
            {
                console.log('sucessmessage')
                
            })
        })
        element(by.name("name")).clear()
        element(by.name("name")).sendKeys('V').then(function()
        {
            element(by.css("[class='alert alert-danger']")).getText().then(function(errormessage)
            {
                console.log(errormessage)
            })
        })
        element(by.linkText("Shop")).click()
        Additem("iphone X")
        //Additem("Samsung Note 8")
        element(by.partialLinkText('Checkout')).getText().then(function(checoutCount)
        {
            var result=checoutCount.split('(')
            expect(result[1].trim().charAt(0)).toBe("1")
        })



     })
})
