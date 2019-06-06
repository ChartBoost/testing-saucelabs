package com.yourcompany.step.definitions;

import com.yourcompany.utils.SauceUtils;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.ios.IOSDriver;

import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.*;
import java.util.concurrent.TimeUnit;
import java.net.URL;
import java.util.UUID;
import static org.junit.Assert.*;


import com.yourcompany.Pages.*;

import static org.hamcrest.CoreMatchers.containsString;

public class GuineaPigSteps {

    //public static String app = "https://github.com/saucelabs-sample-test-frameworks/Java-Junit-Appium-iOS/blob/master/resources/SauceGuineaPig-sim-debug.app.zip?raw=true";
    public static IOSDriver driver;
    public static GuineaPigPage page;
    public String commentInputText;
    public String sessionId;
    protected String platformName = System.getenv("platformName");
    protected String platformVersion = System.getenv("platformVersion");
    protected String deviceOrientation = System.getenv("deviceOrientation");

    @Before
    public void setUp(Scenario scenario) throws Exception {

        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("platformName", this.platformName);
        capabilities.setCapability("platformVersion", this.platformVersion);
        capabilities.setCapability("deviceOrientation", this.deviceOrientation);
       // capabilities.setCapability("app", app);
        capabilities.setCapability("testobject_api_key", "770C9853D98044C9B71FA62692401925");
        capabilities.setCapability("testobject_app_id", "1");

                driver = new IOSDriver(new URL("https://us1.appium.testobject.com/wd/hub"), capabilities);
        sessionId = driver.getSessionId().toString();
    }

    @Given("^I am on the Chartboost Example App$")
    public void user_is_on_guinea_pig_page() throws Exception {
        page = new GuineaPigPage(driver);
    }

//    @When("^I click on the link$")
//    public void user_click_on_the_link() throws Exception {
//        page.followLink();
//    }
//
//    @When("^I submit a comment$")
//    public void user_submit_comment() throws Exception {
//        commentInputText = UUID.randomUUID().toString();
//        page.submitComment(commentInputText);
//    }
//
//    @Then("^I should be on another page$")
//    public void new_page_displayed() throws Exception {
//        assertFalse(page.isOnPage());
//    }
//
//    @Then("^I should see that comment displayed$")
//    public void comment_displayed() throws Exception {
//        assertThat(page.getSubmittedCommentText(), containsString(commentInputText));
//    }

    @After
    public void tearDown(Scenario scenario) throws Exception {
        driver.quit();
    }
}