## Mastering Click Actions in Cypress

This repository contains comprehensive examples and test cases demonstrating various click action implementations in Cypress. It serves as a practical guide for handling different types of click events in web application testing.

# Overview
The repository provides detailed examples of:

Basic click operations

Click and wait patterns

Coordinate-based clicks

Position-based clicks

Keyboard-modified clicks

Click options and configurations

Double click operations

Right-click actions

Custom event triggers

## Getting Started

*Prerequisites*

Node.js 18.x, 20.x, 22.x and above
Cypress (version 10 or higher)

Installation

(1) Clone the repository:

[git clone ](https://github.com/Anshita-Bhasin/click-actions-cypress-guide.git)

(2) npm install cypress --save -dev

(3) npm install

Open Cypress:

npx cypress open

Project Structure

<img width="382" alt="image" src="https://github.com/user-attachments/assets/0eb9e97b-f3f0-449e-9ebf-b38475793601">


 ## Common Issues and Solutions

(1) Element Not Visible
For elements that might be hidden:

"cy.get('.element').click({ force: true })"

## Best Practices

(1) Use Appropriate Selectors

a. Prefer data attributes (data-cy, data-test-id)
b. Avoid absolute selectors

(2). Handle Error properly

## Running Tests

(1) Running All Tests

Command : npx cypress run



## How to use perform click action testing on Cypress Cloud Grid

Using the LambdaTest platform, you can perform regression testing with just one click. Below is the step-by-step instructions on how to execute tests on Cypress Cloud Platform.

Step 1: Install LambdaTest CLI.
Install LambdaTest CLI using npm, use the below command: 
```
<npm install lambdatest-cypress-cli>
```

Step 2: Set up the config.
Once the LambdaTest CLI is installed, now we need to set up the configuration using the below command: 
```
<lambdatest-cypress init>

```
After running the command, there will be a file created in your project named “lambdatest-config.json”. We need to set up the configuration in order to run our test case on different browsers on LambdaTest.

For Cypress version 10 and above, you can follow the below code to set up lambdatest-config.json.

```

{
   "lambdatest_auth": {
      "username": "user.name",
      "access_key": "access.key"
   },
   "browsers": [
      {
         "browser": "Chrome",
         "platform": "Windows 10",
         "versions": [
            "latest-1"
         ]
      },
      {
         "browser": "Firefox",
         "platform": "Windows 10",
         "versions": [
            "latest-1"
         ]
      }
   ],
   "run_settings": {
     "cypress_config_file": "cypress.json",
     "reporter_config_file": "base_reporter_config.json",
     "build_name": "build-name",
     "parallels": 1,
     "specs": "./cypress/e2e/*/*.cy.js",
     "ignore_files": "",
     "network": false,
     "headless": false,
     "npm_dependencies": {
       "cypress": "13.5.0"
     }
   },

    "smart_ui": {
      "project": "Cypress Screenshot Testing",
      "build": "Screenshot Test",
      "baseline": false
    },

   "tunnel_settings": {
      "tunnel": false,
      "tunnel_name": null
   }
}

```

Step 3: Execute Test Case
Once the config is done, now you can execute the Cypress test case on the LambdaTest cloud Platform using the below command  <lambdatest-cypress run>



Updates:
Cypress Version: 13.15.1




