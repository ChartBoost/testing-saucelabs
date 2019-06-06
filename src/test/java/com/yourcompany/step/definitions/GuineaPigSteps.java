package com.yourcompany.step.definitions;

import com.yourcompany.utils.SauceUtils;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TestName;
import org.junit.runner.RunWith;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.*;
import java.util.concurrent.TimeUnit;
import java.net.URL;
import java.util.UUID;
import static org.junit.Assert.*;


import com.yourcompany.Pages.*;
import org.testobject.appium.junit.TestObjectTestResultWatcher;

import static org.hamcrest.CoreMatchers.containsString;

public class GuineaPigSteps {


    public static final String URL = "https://us1.appium.testobject.com/wd/hub";
    public static GuineaPigPage page;
    public String commentInputText;
    public String jobName;
    protected String platformName = System.getenv("platformName");
    protected String platformVersion = System.getenv("platformVersion");
    protected String deviceName = System.getenv("deviceName");
    protected String deviceOrientation = System.getenv("deviceOrientation");
    private AppiumDriver driver;

    @Rule
    public TestName testName = new TestName();

    @Rule
    public TestObjectTestResultWatcher resultWatcher = new TestObjectTestResultWatcher();

    @Before
    public void setUp(Scenario scenario) throws Exception {

        jobName = scenario.getName();

        DesiredCapabilities capabilities = new DesiredCapabilities();

        capabilities.setCapability("platformName", this.platformName);
        capabilities.setCapability("platformVersion", this.platformVersion);
        capabilities.setCapability("deviceName", this.deviceName);
        capabilities.setCapability("deviceOrientation", this.deviceOrientation);
        capabilities.setCapability("name", jobName);
        capabilities.setCapability("testobject_api_key", "36F7AFB931E744C49EC3270E0E7C677B");
        capabilities.setCapability("testobject_suite_name", "Guinea Pig");


        driver = new AndroidDriver(new URL("https://us1.appium.testobject.com/wd/hub"), capabilities);
        resultWatcher.setRemoteWebDriver(driver);

    }

    @Test
    public void testMethod() {


    }


//    @Given("^I am on the Guinea Pig homepage$")
//    public void user_is_on_guinea_pig_page() throws Exception {
//        page = new GuineaPigPage(driver);
//    }
//
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

}