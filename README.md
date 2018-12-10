# Assignment 2 - Vue app - Automated development process.

Name:Zonghao Li

Student No.: 20082483

## Overview.

Can log in, view book lists, add books, delete books, and log out.

## E2E Testing.

     $ npx cypress run --spec cypress/integration/books.spec.js

## Continuous Integration.

https://travis-ci.org/albertlee000/assignment2

## Automated Deployment.

http://foolish-breath.surge.sh/

## Extra features.

. . . . Briefly state any extra aspects of your automation process that you feel should be high-lighted . . . . .

## Appendix.



================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:  3.1.3                                                            │
  │ Browser:  Electron 59 (headless)                                           │
  │ Specs:    3 found (books.spec.js, home.spec.js, login-logout.js)           │
  └────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────

  Running: books.spec.js...                                            (1 of 3)


  Login and Book operations
    √ should login first  (4309ms)
    √ should add a book for deleting  (8904ms)
    √ delete a book (8800ms)


  3 passing (24s)


  (Results)

  ┌─────────────────────────────┐
  │ Tests:        3             │
  │ Passing:      3             │
  │ Failing:      0             │
  │ Pending:      0             │
  │ Skipped:      0             │
  │ Screenshots:  0             │
  │ Video:        true          │
  │ Duration:     23 seconds    │
  │ Spec Ran:     books.spec.js │
  └─────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  D:\lzh\assignment2\cypress\videos\books.spec.js.mp4 (3 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: home.spec.js...                                             (2 of 3)


  Home page
    √ Shows a header (3586ms)
    √ Shows a td (1346ms)
    √ Redirects when links are clicked (690ms)
    Navi bar
      √ Shows the required links (503ms)


  4 passing (8s)


  (Results)

  ┌────────────────────────────┐
  │ Tests:        4            │
  │ Passing:      4            │
  │ Failing:      0            │
  │ Pending:      0            │
  │ Skipped:      0            │
  │ Screenshots:  0            │
  │ Video:        true         │
  │ Duration:     7 seconds    │
  │ Spec Ran:     home.spec.js │
  └────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  D:\lzh\assignment2\cypress\videos\home.spec.js.mp4 (1 second)


────────────────────────────────────────────────────────────────────────────────

  Running: login-logout.js...                                          (3 of 3)


  Login and Logout
    √ login (4039ms)
    √ logout (1579ms)


  2 passing (8s)


  (Results)

  ┌───────────────────────────────┐
  │ Tests:        2               │
  │ Passing:      2               │
  │ Failing:      0               │
  │ Pending:      0               │
  │ Skipped:      0               │
  │ Screenshots:  0               │
  │ Video:        true            │
  │ Duration:     7 seconds       │
  │ Spec Ran:     login-logout.js │
  └───────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  D:\lzh\assignment2\cypress\videos\login-logout.js.mp4 (1 second)


================================================================================

  (Run Finished)


      Spec                                    Tests  Pass…  Fail…  Pend…  Skip…
  ┌────────────────────────────────────────────────────────────────────────────┐
  │ √ books.spec.js                   00:23      3      3      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ home.spec.js                    00:07      4      4      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ login-logout.js                 00:07      2      2      -      -      - │
  └────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                 00:39      9      9      -      -      -


     $ npx cypress run

