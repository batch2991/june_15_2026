Feature: To test login functionality with invalid data

@smoke @regression
Scenario Outline: I will login will invalid credentials
Given i am on the login page
When i will enter "<username>" and "<passwd>" and login
Then i should see the error message on the application
Examples:
 |username|passwd|
 |standard_user|12345456|
 |standard_user| |