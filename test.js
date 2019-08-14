require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Checkout WanderLog.com', function () {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('Login to Wanderlog', async function() {
        await driver.get('https://wander-log.herokuapp.com');
        await driver.findElement(By.css('.navbar-toggler-icon')).click();
        await driver.findElement(By.css('.loginBtn')).click();
        //await driver.findElement(By.css('.loginBtn')).click();
       // await driver.findElement(By.name('username')).click();

        await driver.findElement(By.name('username')).sendKeys('123');
        //await driver.findElement(By.name('password')).click();
        await driver.findElement(By.name('password')).sendKeys('123', Key.RETURN);


       
        // await driver.wait(until.titleIs('dalenguyen - Google Search'), 1000);
        // await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        // await driver.findElement(By.name('q')).clear();

        // let title = await driver.findElement(By.css('.mr-auto .navbar-brand')).getText();
        //  assert.equal(title, "WanderLog");              
    });

    it('Fill out form', async function() {
        await driver.findElement({id: 'new-entry'}).click()


        

    });

    after(() => driver && driver.quit());
})