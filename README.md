**API Automation Test Framework**

This project has been created using a API automation test framework built using the below: 
•	TypeScript
•	Jest
•	ts-jest 
It demonstrates all the testing scenarios along with generating a HTML report for the provided APIs.

**Project Structure**

•	api-automation-test/
•	node_modules/
•	reports/ # Jest HTML reports
•	tests/ # Test files
o	randomUser.test.ts # Example tests for Random User API
•	utils/ # Utility files
o	apiClient.ts # API request helper
•	jest.config.js # Jest configuration
•	package.json # NPM dependencies and scripts
•	tsconfig.json # TypeScript configuration ---

**Setup Instructions**

_1. Create a new project folder_

New-Item -ItemType Directory api-automation-test
Set-Location api-automation-test

_2.	Create subfolders_

New-Item -ItemType Directory utils, tests(utils), reports

_3.	Create files_

New-Item utils\apiClient.ts
New-Item tests\randomUser.test.ts
New-Item tsconfig.json
New-Item jest.config.js
New-Item package.json

_4.	Install dependencies:_

npm install

_5.	Run the tests:_

npm test
________________________________________
✅ **Test Scenarios**

The test file tests/randomUser.test.ts contains the following:

1.	Fetch a random user – verifies API returns a single user.
2.	Fetch multiple users – verifies API returns the requested number of users.
3.	Invalid endpoint – ensures the API returns a 404 error.
4.	Wrong domain – ensures the client gracefully handles errors.
________________________________________
**Reports**

After running tests, an HTML report is generated at:
reports/report.html (This is present in the test pack provided)
Open this file in your browser to view results.
________________________________________
**Tech Stack**

•	Node.js + npm

•	TypeScript

•	Jest (test runner)

•	ts-jest (TypeScript support for Jest)

•	jest-html-reporter (HTML test report)

________________________________________
**CI/CD pipelines with GitHub Actions workflow:**

All the CI/CD pipeline commands are updated in .github/workflows/ci.yml 

-	This will run the provided commands ( in the Jobs section) to run the workflow, which can be viewed in the Git -> Actions
-	They can be manually triggered by selecting the respective branch on the run workflow
-	Or whenever the branch is pushed to the CI/CD job will start and complete the provided steps on the github.
________________________________________
✅ **Features**

•	Uses Node 22 to match your local environment.

•	Installs all dependencies before running tests.

•	Runs Jest in sequential mode with open handle detection for CI stability.

•	Generates an HTML report using jest-html-reporters.

•	Triggers on push or pull request to main.
