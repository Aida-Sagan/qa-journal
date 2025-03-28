# Aida's QA Automation Portfolio

Welcome to my QA Automation & Manual Testing Portfolio.

This repository includes:
- Automated API & UI test projects (JavaScript, Playwright, Mocha, Supertest)
- QA documentation templates (Test Plan, Risk Matrix, Bug Report format)
- Manual test cases, checklists & bug reports
- Risk analysis examples
- CI/CD integration via GitHub Actions
- Allure & Playwright reports

---

## 🔧 Technologies Used
- **JavaScript / ES Modules**
- **Playwright** for UI end-to-end testing
- **Mocha + Chai + Supertest** for API testing
- **Sinon.js** for mocking
- **Allure / Playwright HTML Reports**
- **GitHub Actions** for CI/CD pipelines

---

## 📁 Projects

| Project                          | Description                                  | Link                                |
|----------------------------------|----------------------------------------------|-------------------------------------|
| API Tests for Reqres API         | Automated API tests (Supertest, Chai)        | [View](./projects/api-tests-reqres) |
| UI Tests for ToDo MVC            | Automated UI tests (Playwright)              | [View](./projects/ui-tests-todo)    |
| E-commerce UI Tests - Saucedemo | Realistic E2E test suite (cart, checkout)    | [View](./projects/ecommerce-tests-saucedemo) |

Each project includes a README explaining the test approach, test coverage, and how to run it locally.

---

## 📄 Documentation

Located in the [`documentation/`](./documentation) folder:

- `test-plan-template.md` — how I structure my test plans
- `test-case-template.md` — manual/automated test case layout
- `risk-matrix-template.md` — identifying and evaluating product risks
- `ticket-template.md` — bug report template I use in QA teams

---

## 🧪 Test Scenarios

Located in [`test-scenarios/`](./test-scenarios):

- Functional scenarios
- API validation flows
- Database testing logic

---

## 🐞 Bug Reports & Manual Testing

In the [`bug-reports/`](./bug-reports) and [`manual-checklists/`](./manual-checklists) folders:

- Real bug reports written from test runs
- Regression & Smoke checklists
- Test result data in CSV

---

## 🚀 How to Run Projects

Each project contains instructions inside its `README.md`.  
To run any project:

```bash
cd projects/<project-folder>
npm install
npx playwright test  # or `npm test` for Mocha-based projects
