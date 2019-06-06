import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
    features = {"classpath:features/FollowLink.feature"},
    format = {"html:target/cucumber-parallel/1.html", "pretty"},
    monochrome = true,
    tags = {"~@ignore"},
    glue = { "com.yourcompany.step.definitions" })
public class Parallel01IT {
}