$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/FollowLink.feature");
formatter.feature({
  "line": 1,
  "name": "Guinea Pig link",
  "description": "",
  "id": "guinea-pig-link",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4397613721,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Unable to create a new remote session. Please check the server log for more details. Original error: Please pass a URL to app capability to use Remote Install Apps\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Sauce Labs RDC\u0027, ip: \u0027N/A\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-119-generic\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\nCommand duration or timeout: 3.49 seconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027marcela.bras-mbptb.home\u0027, ip: \u0027fe80:0:0:0:21:ac9f:4304:422b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.remote.AppiumCommandExecutor$1.createSession(AppiumCommandExecutor.java:208)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.createSession(AppiumCommandExecutor.java:217)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:38)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:84)\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:94)\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:95)\n\tat com.yourcompany.step.definitions.GuineaPigSteps.setUp(GuineaPigSteps.java:67)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat io.appium.java_client.remote.AppiumCommandExecutor$1.createSession(AppiumCommandExecutor.java:186)\n\t... 51 more\nCaused by: org.openqa.selenium.SessionNotCreatedException: Please pass a URL to app capability to use Remote Install Apps\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Sauce Labs RDC\u0027, ip: \u0027N/A\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-119-generic\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\nCommand duration or timeout: 3.49 seconds\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\t... 56 more\nCaused by: org.openqa.selenium.SessionNotCreatedException: Please pass a URL to app capability to use Remote Install Apps\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Sauce Labs RDC\u0027, ip: \u0027N/A\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-119-generic\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027marcela.bras-mbptb.home\u0027, ip: \u0027fe80:0:0:0:21:ac9f:4304:422b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: unknown\n",
  "status": "failed"
});
formatter.scenario({
  "line": 3,
  "name": "Can follow link to another page",
  "description": "",
  "id": "guinea-pig-link;can-follow-link-to-another-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Guinea Pig homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be on another page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});