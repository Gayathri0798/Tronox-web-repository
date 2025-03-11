import BasePage from "../../common.js"
let dataset = await import('../Data/'+ 'Tronox' +'/Physicalinventory.json', { assert: { type: 'json' } });
let locators = await import('../pageobjects/elementIdentifiers/'+ 'Tronox' +'/physicalinventoryxpath.json', { assert: { type: 'json' } })
locators=locators.default;
dataset=dataset.default;
const Base = new BasePage();
//jeeva changes start
import fs from 'fs';
//jeeva changes ends
describe('Create Create Maintenance Notification and Order', () => {

  //jeeva changes start
  let testResults = [];
  let screenshotData = [];
  let summary = { passed: 0, failed: 0 };
  
  const takeScreenshot = async (stepName) => {
    const fileName = `screenshot_${stepName}_${Date.now()}.png`;
    const filePath = `./screenshots/${fileName}`;
    screenshotData.push(filePath);
    console.log('stepName'+stepName);
    console.log('screenshot data length >> '+screenshotData.length);
    await browser.saveScreenshot(filePath);
    
};

after(async () => {
  fs.writeFileSync('./testResults.json', JSON.stringify(testResults, null, 2));
});

const initTestcase = () => {
 
 screenshotData=[];
 
};

const endTestcase = (data) => {
 testResults.push(data);
}
//jeeva changes ends

    before(async()=>{
      //jeeva changes start
      fs.writeFileSync('./testResults.json', JSON.stringify([], null, 2));
      //jeeva changes ends
        await browser.url(global.wdioEnvParameters.config.baseUrl);
        await browser.maximizeWindow();
    })

      

       

    it('Should Create Maintenance Notification and Order', async() => {
      //jeeva changes start
      initTestcase();
      try {
      //jeeva changes end
        await Base.waitForDisplayedAndSetValue($(locators.Usernameoktaxpath), dataset.logincred.username);
        await Base.waitForDisplayedAndSetValue($(locators.Passwordoktaxpath), dataset.logincred.password);
        await Base.waitForDisplayedAndClick($(locators.Submitbuttonxpath), dataset.logincred.submitbtn, 5000);
        await takeScreenshot('login_success');
        
        await Base.waitForDisplayedAndSetValue($(locators.Codepathxpath), dataset.logincred.code); // OTP_____________________
        await Base.waitForDisplayedAndClick($(locators.verifybuttonxpath), 5000);
        await browser.pause(10000)  
    
    const dashboardElement = await $("//section[@id='main-content']/child::section/section/descendant::section[35]");
    const CreateMaintenanceNotification = $('//*[@id="dashboardGroups"]/div/child::div/descendant::ul/descendant::div[289]/child::div/div');
    const CreateMaintenanceOrder = $('//*[@id="dashboardGroups"]/div/child::div/descendant::ul/descendant::div[299]/child::div/div');
    
 
 
  // Fiori Tiles Selection
  await dashboardElement.scrollIntoView();
  await Base.waitForDisplayedAndClick(dashboardElement, 5000);
  await takeScreenshot('dashboard_clicked');
  await browser.pause(5000);
 
   // Switch window
   const currentWindow = await browser.getWindowHandles();
   await browser.switchToWindow(currentWindow[1]);
   await takeScreenshot('new_window_opened');
   await browser.pause(5000);
 
 
   // Selection of Create Maintenance Notification Tiles
  await Base.waitForDisplayedAndClick(CreateMaintenanceNotification, 8000);
 
    // Switch to the Display Journal Enteries iframe
  const iframePick = await browser.$('//iframe[@id="application-Shell-startGUI"]');
  await browser.switchToFrame(iframePick);
 
  // Enter Notification Type
  const enterNotificationType = await $('//input[@id="M0:46:::2:22"]');
  await Base.waitForDisplayedAndSetValue(enterNotificationType, dataset.MTSNOftification.NotificationType);
  await browser.keys('Enter');
  await takeScreenshot('Enter_notification');
  await browser.pause(5000);
 
   // enter Notification Discription
   const enterNotificationDiscription = await $('//input[@id="M0:46:1:1::0:10"]');
   await Base.waitForDisplayedAndSetValue(enterNotificationDiscription, dataset.MTSNOftification.NotificationDiscription);
   await takeScreenshot('Enter_notification_description');
   await browser.pause(5000);
 
  // click on Priority Dropdown
  const clickPriorityDropdown = await $('//input[@id="M0:46:2:3B256:1:4::1:55"]');
  await Base.waitForDisplayedAndClick(clickPriorityDropdown, 5000);
  await browser.pause(5000);
 
  // Select Priority
  const selectPriority = await $('//div[@data-itemvalue2="Urgent"]');
  await Base.waitForDisplayedAndClick(selectPriority, 5000);
  await takeScreenshot('select_priority');
  await browser.pause(5000);
 
  // enter Maint.Act.Type
  const enterActType = await $('//input[@id="M0:46:2:3B256:1:4::4:17"]');
  await Base.waitForDisplayedAndSetValue(enterActType, dataset.MTSNOftification.ActType);
  await browser.pause(5000);

    // enter Functional Location
    const enterFunctionalLocation = await $('//input[@id="M0:46:2:3B256:1:1:1::0:16"]');
    await Base.waitForDisplayedAndSetValue(enterFunctionalLocation, dataset.MTSNOftification.FunctionalLocation);
    await browser.pause(5000);

    // enter Equipment
    const enterEquipment = await $('//input[@id="M0:46:2:3B256:1:1:1::1:16"]');
    await Base.waitForDisplayedAndSetValue(enterEquipment, dataset.MTSNOftification.Equipment);
    await takeScreenshot('Enter_equipment');
    await browser.pause(5000);
 
      // select Equipment
  const selectEquipment = await $("//div[text()='7220_FW6309']");
  await Base.waitForDisplayedAndClick(selectEquipment, 5000);
  await browser.pause(5000);
 
  // save the Document
  const clickOnSave = await $('//div[@title="Save (Ctrl+S)"]');
  await Base.waitForDisplayedAndClick(clickOnSave, 5000);
  await browser.pause(5000);
  await browser.keys('Enter');
  await browser.pause(5000);
  await browser.keys('Enter');
  await takeScreenshot('save_the_document');
  await browser.pause(5000);
 
  // Document No
  const CreateNotification = await $("//div[@id='msgarea']/child::div[1]/div/descendant::span[3]").getText();
  const NotificationNo = Number(CreateNotification.replace(/\D/g, ''));
  console.log("Notification No:",NotificationNo);
 
  // ***************Create Maintenance Order********************
 
    // Switch to main window
    const allWindowHandles = await browser.getWindowHandles();
    const originalWindowHandle = allWindowHandles[0];
    await browser.switchToWindow(originalWindowHandle);
    await browser.pause(10000);
 
    // Fiori Tiles Selection
    await dashboardElement.scrollIntoView();
    await Base.waitForDisplayedAndClick(dashboardElement, 5000);
    await browser.pause(5000);
 
    // Switch window
    const currentWindowOne = await browser.getWindowHandles();
    await browser.switchToWindow(currentWindowOne[2]);
    await browser.pause(5000);
 
    // Selection of Create Maintenance Order Tiles
    await Base.waitForDisplayedAndClick(CreateMaintenanceOrder, 8000);
 
    // Switch to the Display Supplier Invoice iframe
    const iframeDSI = await browser.$('//iframe[@id="application-Shell-startGUI"]');
    await browser.switchToFrame(iframeDSI);
 
    // Enter Notification No
   const enterNotificationNo = await $('//input[@id="M0:46:::2:22"]');
   await Base.waitForDisplayedAndSetValue(enterNotificationNo, NotificationNo);
   await browser.pause(5000);
 
   // click on notification from header
  const clickOnNotificationHeader = await $('//div[@title="Notification (F8)"]');
  await Base.waitForDisplayedAndClick(clickOnNotificationHeader, 5000);
  await browser.pause(5000);
 
  // click on menu from header
  const clickOnMenuHeader = await $('//div[@title="Menu"]');
  await Base.waitForDisplayedAndClick(clickOnMenuHeader, 5000);
  await browser.pause(5000);
 
  // click on notification from menu bar
  const clickOnManinNotification = await $('//span[text()="Maintenance notification"]');
  await Base.waitForDisplayedAndClick(clickOnManinNotification, 5000);
  await browser.pause(5000);
 
  // click on Order from menu bar
  const clickOnOrder = await $('//span[text()="Order"]');
  await Base.waitForDisplayedAndClick(clickOnOrder, 5000);
  await browser.pause(5000);
 
  // click on Create from menu bar
  const clickOnCreate = await $('(//span[text()="Create"])[1]');
  await Base.waitForDisplayedAndClick(clickOnCreate, 5000);
  await browser.pause(5000);
 
  // click on Direct from menu bar
  const clickOnDirect = await $('//span[text()="Direct"]');
  await Base.waitForDisplayedAndClick(clickOnDirect, 5000);
  await browser.pause(5000);
 
  // click on Continue Button
  const clickOnContinue = await $('//div[@title="Continue (Enter)"]');
  await Base.waitForDisplayedAndClick(clickOnContinue, 5000);
  await browser.pause(5000);
  await browser.keys('Enter');
 
  // save the Document
  const clickOnSaveBTN = await $('//div[@title="Save (Ctrl+S)"]');
  await Base.waitForDisplayedAndClick(clickOnSaveBTN, 5000);
  await browser.pause(5000);
 
  // Confirm Cost calculation
  const ConfirmCostCalculation = await $('//div[@title="Yes"]')
  await Base.waitForDisplayedAndClick(ConfirmCostCalculation, 5000);
  await takeScreenshot('confirm_cost_calculation');
  await browser.pause(5000);
 
  // Document No
  const CreateOrder = await $("//div[@id='msgarea']/child::div[1]/div/descendant::span[3]").getText();
  const OrdernNo = Number(CreateOrder.replace(/\D/g, '').substring(0, 8));
  console.log("Order No:",OrdernNo);
  //jeeva changes start
  const result = {
    Testname:'Should Create Maintenance Notification and Order',
    status: 'passed', // Default to failed
    screenshots: screenshotData,
    error: null
    };
    endTestcase(result);
    summary.passed++;
      
    }
    catch(error) {
      const result = {
        Testname:'Should Create Maintenance Notification and Order',
        status: 'failed', // Default to failed
        screenshots: screenshotData,
        error: error.message
        };
        endTestcase(result);
        summary.failed++;
    }
    //jeeva changes ends
})
}) 