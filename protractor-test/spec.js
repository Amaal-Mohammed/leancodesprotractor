
describe('login', () => {
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });



 it('Should create measurement', () => {
 browser.get('http://localhost:4200/');
 

 
 element(by.id('username')).sendKeys("Admin")
 element(by.id('password')).sendKeys("admin")
 element(by.xpath("//span[@class='ui-button-text ui-clickable']")).click()
 //browser.sleep(5000)
 browser.sleep(5000)
 browser.manage().window().maximize()
 element(by.xpath("//a[@id='menu-link-']//span[contains(text(),'Aufmaß')]")).click()
 element(by.xpath("//a[@id='menu-link-/measurements/measurement/_new']")).click()
 element(by.xpath("//input[@id='m-number']")).sendKeys("amaal123")
 //browser.sleep(5000)

 element(By.xpath("//p-dropdown[@id='measurementEditType']")).click()
 browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
browser.actions().sendKeys(protractor.Key.ENTER).perform()
element(by.xpath("//p-dropdown[@id='m-type']")).click();

browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
browser.actions().sendKeys(protractor.Key.ENTER).perform()

element(by.xpath("//input[@id='construction-site']")).click()
element(by.xpath("//input[@id='construction-site']")).sendKeys("22")
element(by.xpath("//p-inputmask[@id='idExecutionTo']/input")).sendKeys("23.09.2020")
element(by.xpath("//p-inputmask[@id='idAccountingMonth']/input")).sendKeys("09.2020")
browser.executeScript('window.scrollTo(500,0);')
element(by.xpath("//p-inputmask[@id='quotation-number']")).click()
element(by.xpath("//input[@placeholder='00/000/000']")).sendKeys("38140013")
browser.executeScript('window.scrollTo(0,0);')
element(by.xpath("//p-autocomplete[@id='release-order']//input")).sendKeys("order1")
element(by.xpath("//a[@id='menu-item-save']/span[2]")).click()

expect(element(by.xpath("//span[contains(text(),'Aufmaß Aktualisiert')]")).getText()).toEqual('Aufmaß Aktualisiert');



 
browser.sleep(5000)
 
 });
});