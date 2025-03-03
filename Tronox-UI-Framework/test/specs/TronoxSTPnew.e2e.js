import BasePage from "../../common.js"
let dataset = await import('../Data/'+ global.wdioEnvParameters.config.appName +'/Physicalinventory.json', { assert: { type: 'json' } });
let locators = await import('../pageobjects/elementIdentifiers/'+ global.wdioEnvParameters.config.appName +'/physicalinventoryxpath.json', { assert: { type: 'json' } })
locators=locators.default;
dataset=dataset.default;

const Base = new BasePage();
describe('STP Test cases Newely added', ()=>{
    before(async()=>{
        await browser.url(global.wdioEnvParameters.config.baseUrl);
        await browser.maximizeWindow();
    })

    it('S4_STP_IM_Check PM WO Status in SAP for IM Kitting Process', async()=>{

        await Base.waitForDisplayedAndSetValue($(locators.Usernameoktaxpath), dataset.logincred.username);
        await Base.waitForDisplayedAndSetValue($(locators.Passwordoktaxpath), dataset.logincred.password);
        await Base.waitForDisplayedAndClick($(locators.Submitbuttonxpath), dataset.logincred.submitbtn, 5000);
        await Base.waitForDisplayedAndSetValue($(locators.Codepathxpath), dataset.logincred.code); // OTP_____________________
        await Base.waitForDisplayedAndClick($(locators.verifybuttonxpath), 5000);
        await browser.pause(10000)
    
        // Launch Firio app launch
        const dashboard = $(locators.dashboardElement);
        await dashboard.scrollIntoView();
        await Base.waitForDisplayedAndClick(dashboard, 5000);
        await browser.pause(5000);
        
        // window handle
        const newwindow = await browser.getWindowHandles();
        await browser.switchToWindow(newwindow[1]);
        await browser.pause(10000);
    
        // Click on the STP IW33 Tile
        const IW33title = $(locators.IW33tileselection);
        await IW33title.scrollIntoView();
        await Base.waitForDisplayedAndClick(IW33title, 5000);
        await browser.pause(5000);
    
        // Switch to the iframe to enter data
        const iframe3 = await browser.$(locators.iframexpath);
        await browser.switchToFrame(iframe3);
        await browser.pause(3000);

        // Enter the order number
        await Base.waitForDisplayedAndSetValue($(locators.IW33orderinput), dataset.Iw33KittingprocessWO.ordernumber);
        await browser.keys("Enter");
        await browser.pause(3000);

        // Click on the operations tab
        await Base.waitForDisplayedAndClick($(locators.IW33operation), 5000);
        await browser.pause(5000);

        // click on the check box
        await Base.waitForDisplayedAndClick($(locators.IW33clickoncheckboxmaterial), 5000);
        await browser.pause(5000);

        // Click on the I button
        await Base.waitForDisplayedAndClick($(locators.IW33clickkonIbutton), 5000);
        await browser.pause(3000);

        // Validate of KITR Field in table
        const validate = await $(locators.IW33KITRvalidation);

// Wait for the element to be displayed (returns true if visible within timeout)
    const isDisplayed = await validate.waitForDisplayed({ timeout: 5000, reverse: false });

    if (isDisplayed) {
        console.log("Element is visible!");
        // await validate.saveScreenshot('./screenshots/element.png'); // Take a screenshot of the element
    } else {
        console.log("Element is NOT visible within timeout.");
    }
        await browser.pause(3000);
    })


    it('S4_STP_IM_Print MRO Pick List for Kitting', async()=>{

        await Base.waitForDisplayedAndSetValue($(locators.Usernameoktaxpath), dataset.logincred.username);
        await Base.waitForDisplayedAndSetValue($(locators.Passwordoktaxpath), dataset.logincred.password);
        await Base.waitForDisplayedAndClick($(locators.Submitbuttonxpath), dataset.logincred.submitbtn, 5000);
        await Base.waitForDisplayedAndSetValue($(locators.Codepathxpath), dataset.logincred.code); // OTP_____________________
        await Base.waitForDisplayedAndClick($(locators.verifybuttonxpath), 5000);
        await browser.pause(10000)
    
        // Launch Firio app launch
        const dashboard = $(locators.dashboardElement);
        await dashboard.scrollIntoView();
        await Base.waitForDisplayedAndClick(dashboard, 5000);
        await browser.pause(5000);
        
        // window handle
        const newwindow = await browser.getWindowHandles();
        await browser.switchToWindow(newwindow[1]);
        await browser.pause(10000);
    
        // Click on the STP ME21N Tile enter ZMTO in input box
        const ME21Ntitle = $(locators.ZMTOkittingxpathbutME21N);
        await ME21Ntitle.scrollIntoView();
        await Base.waitForDisplayedAndClick(ME21Ntitle, 5000);
        await browser.pause(5000);
    
        // Switch to the iframe to enter data
        const iframe3 = await browser.$(locators.iframexpath);
        await browser.switchToFrame(iframe3);
        await browser.pause(3000);

        // Enter the tcode /nZMTO_1001
        await Base.waitForDisplayedAndSetValue($(locators.ZMTOtiletoentertcode), dataset.ZMTOKitting.Tcode);
        await browser.keys('Enter');
        await browser.pause(3000);

        // Enter the order Number
        await Base.waitForDisplayedAndSetValue($(locators.ZMTOENterorderNumber), dataset.ZMTOKitting.ordernumber);
        await browser.pause(3000);

        // Enter the maintain plant
        await Base.waitForDisplayedAndSetValue($(locators.ZMTOentermaintainorder), dataset.ZMTOKitting.Mintainplan);
        await browser.pause(3000);

        // Clear the period date
        const period = $(locators.ZMTOclearperiod);
        await $(period).clearValue;

        // Click on the execute button
        await Base.waitForDisplayedAndClick($(locators.ZMTOexecutebutton), 3000);
        await browser.pause(10000);

        // Click on the order selection
        await Base.waitForDisplayedAndClick($(locators.ZMTOorderselection), 5000);
        await browser.pause(3000);

        // Click on the WO print button
        await Base.waitForDisplayedAndClick($(locators.ZMTOprintonWObutton), 5000);
        await browser.pause(5000);

        // Select the shop keeper
        await Base.waitForDisplayedAndClick($(locators.ZMTOshppaperdeselect), 5000);
        await browser.pause(3000);

        await Base.waitForDisplayedAndClick($(locators.ZMTOsopkeeperselect), 5000);
        await browser.pause(5000);

        // Enter the output device
        await Base.waitForDisplayedAndClick($(locators.ZMTOouputspan), 5000);
        await Base.waitForDisplayedAndSetValue($(locators.ZMTOoutputdevice), dataset.ZMTOKitting.outputdevice);
        await browser.pause(3000);

        // Click on print preview
        await Base.waitForDisplayedAndClick($(locators.ZMTOclickomprintpreview), 5000);
        await browser.pause(5000);

        // Enter output value
        await Base.waitForDisplayedAndSetValue($(locators.ZMTOEnteroutputdevicepopup), dataset.ZMTOKitting.outputdevice);
        await browser.pause(3000);

        // Click on check box
        await Base.waitForDisplayedAndClick($(locators.ZMTOclickoncheckbox), 5000);
        await browser.pause(5000);

    })

    it('S4_STP_IM_Change Storage Locations in WO Components for Kitting', async()=>{

        await Base.waitForDisplayedAndSetValue($(locators.Usernameoktaxpath), dataset.logincred.username);
        await Base.waitForDisplayedAndSetValue($(locators.Passwordoktaxpath), dataset.logincred.password);
        await Base.waitForDisplayedAndClick($(locators.Submitbuttonxpath), dataset.logincred.submitbtn, 5000);
        await Base.waitForDisplayedAndSetValue($(locators.Codepathxpath), dataset.logincred.code); // OTP_____________________
        await Base.waitForDisplayedAndClick($(locators.verifybuttonxpath), 5000);
        await browser.pause(12000)
    
        // Launch Firio app launch
        const dashboard = $(locators.dashboardElement);
        await dashboard.scrollIntoView();
        await Base.waitForDisplayedAndClick(dashboard, 5000);
        await browser.pause(70000);
        
        // window handle
        const newwindow = await browser.getWindowHandles();
        await browser.switchToWindow(newwindow[1]);
        await browser.pause(10000);
    
        // Click on the STP IW32 Tile enter IW32 in input box
        const IW32title = $(locators.IW32kittingchangexpath);
        await IW32title.scrollIntoView();
        await Base.waitForDisplayedAndClick(IW32title, 5000);
        await browser.pause(5000);
    
        // Switch to the iframe to enter data
        const iframe3 = await browser.$(locators.iframexpath);
        await browser.switchToFrame(iframe3);
        await browser.pause(3000);

        // Enter the order number
        await Base.waitForDisplayedAndSetValue($(locators.IW32ordernumber), dataset.IW32changemaintainance.order);
        await browser.keys('Enter');
        await browser.pause(3000);

        // Click on the componenet
        await Base.waitForDisplayedAndClick($(locators.IW32componenttab), 5000);
        await browser.pause(3000);

        // Enter the storage location
        await Base.waitForDisplayedAndClick($(locators.IW32storagelocation), 5000);
        await Base.waitForDisplayedAndSetValue($(locators.IW32storageinput), dataset.IW32changemaintainance.storagelocation);
        await browser.pause(3000);

        // Click on the save button
        // await Base.waitForDisplayedAndClick($(locators.IW32clickonsavebutton), 3000);
        // await browser.pause(5000);

    })


    it.only('S4_STP_IM_Transfer Posting of Material for Kitting', async()=>{

        await Base.waitForDisplayedAndSetValue($(locators.Usernameoktaxpath), dataset.logincred.username);
        await Base.waitForDisplayedAndSetValue($(locators.Passwordoktaxpath), dataset.logincred.password);
        await Base.waitForDisplayedAndClick($(locators.Submitbuttonxpath), dataset.logincred.submitbtn, 5000);
        await Base.waitForDisplayedAndSetValue($(locators.Codepathxpath), dataset.logincred.code); // OTP_____________________
        await Base.waitForDisplayedAndClick($(locators.verifybuttonxpath), 5000);
        await browser.pause(10000)
    
        // Launch Firio app launch
        const dashboard = $(locators.dashboardElement);
        await dashboard.scrollIntoView();
        await Base.waitForDisplayedAndClick(dashboard, 5000);
        await browser.pause(70000);
        
        // window handle
        const newwindow = await browser.getWindowHandles();
        await browser.switchToWindow(newwindow[1]);
        await browser.pause(10000);
    
        // Click on the STP MIGO Tile enter 
        const MIGOtitle = $(locators.MIGOxpathforkitting);
        await MIGOtitle.scrollIntoView();
        await Base.waitForDisplayedAndClick(MIGOtitle, 5000);
        await browser.pause(5000);
    
        // Switch to the iframe to enter data
        const iframe3 = await browser.$(locators.iframexpath);
        await browser.switchToFrame(iframe3);
        await browser.pause(3000);
        
        // Click on order selection and select option
        await Base.waitForDisplayedAndClick($(locators.MIGOorderselection), 5000);
        await Base.waitForDisplayedAndClick($(locators.MIGOselectA07), 5000);
        await browser.pause(3000);

        // Click on the Suplier drop down
        await Base.waitForDisplayedAndClick($(locators.MIGOsupppliervalues), 5000);
        await Base.waitForDisplayedAndClick($(locators.MIGOselectR08), 5000);
        await browser.pause(3000);

        // Enter the order number
        await Base.waitForDisplayedAndSetValue($(locators.MIGOOrdernumber), dataset.MIGOKittin.order);
        await browser.keys('Enter');
        await browser.pause(3000);

        // Enter the Transfer number in input box
        await Base.waitForDisplayedAndSetValue($(locators.MIGOtransfernumber), dataset.MIGOKittin.GInumber);
        await browser.pause(3000);

        // Click on the Post button
        // await Base.waitForDisplayedAndClick($(locators.MIGOpostbuttonxpath), 5000);
        // await browser.pause(3000);
    })
})