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

📁 Project Structure


cypress/
├── e2e/cypress_click_actions
│   ├── basic-click.cy.js
│   ├── click-and-wait.cy.js
│   ├── click-on-coordinates.cy.js
│   ├── click-on-position.cy.js
│   ├── click-with-keyboard.cy.js
│   ├── click-with-options.cy.js
│   ├── double-click.cy.js
│   ├── right-click.cy.js
│   └── trigger-events.cy.js
├── support/
│   └── commands.js
└── cypress.config.js


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

Updates:
Cypress Version: 13.15.1




