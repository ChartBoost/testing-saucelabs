$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CommentText.feature");
formatter.feature({
  "line": 1,
  "name": "Guinea Pig comment",
  "description": "",
  "id": "guinea-pig-comment",
  "keyword": "Feature"
});
formatter.before({
  "duration": 26448048707,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Can submit comment",
  "description": "",
  "id": "guinea-pig-comment;can-submit-comment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Chartboost Example App",
  "keyword": "Given "
});
formatter.match({
  "location": "GuineaPigSteps.user_is_on_guinea_pig_page()"
});
formatter.result({
  "duration": 113427882,
  "status": "passed"
});
formatter.after({
  "duration": 1297036426,
  "status": "passed"
});
});