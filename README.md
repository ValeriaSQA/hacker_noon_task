# hacker_noon_task

To set up the Cypress framework follow [Cypress DOCUMENTATION](https://www.cypress.io/).

### Installation

```bash
npm install cypress --save-dev
```

### Opening the App

Using `npx`

**Note**: `npx` is included with `npm > v5.2` or can be installed separately.

```bash
npx cypress open
```

### Running Tests

Run all e2e tests

```bash
cypress run
```

Testing results

```bash
====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.7.0                                                                         │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v16.20.0 (/usr/local/bin/node)                                                 │
  │ Specs:          3 found (brokenUrl.spec.js, performanceTesting.spec.js, validUrl.spec.js)      │
  │ Searched:       cypress/integration/part_2_task_hackernoon/*.js                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  brokenUrl.spec.js                                                               (1 of 3)


  Broken version
    ✓ should not display the main content as title (1916ms)


  1 passing (4s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     3 seconds                                                                        │
  │ Spec Ran:     brokenUrl.spec.js                                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 3 seconds                                                  

  -  Video output: /Users/valeriiasysoeva/WebstormProjects/hacker_noon_task/cypress/videos/brokenUrl.spec.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  performanceTesting.spec.js                                                      (2 of 3)


  Performance testing
    ✓ Original production version - should load the production version in less than 4 seconds (2917ms)
    ✓ Broken version - should not load the main content after 4 seconds (1306ms)


  2 passing (8s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     7 seconds                                                                        │
  │ Spec Ran:     performanceTesting.spec.js                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 2 seconds                                                  

  -  Video output: /Users/valeriiasysoeva/WebstormProjects/hacker_noon_task/cypress/videos/performanceTesting.spec.js.mp4


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  validUrl.spec.js                                                                (3 of 3)


  Original production version
    ✓ should successfully display the main content (3148ms)
    ✓ should display an audio file (1422ms)
    ✓ should check the displayed text (1347ms)


  3 passing (7s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     7 seconds                                                                        │
  │ Spec Ran:     validUrl.spec.js                                                                 │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: 3 seconds                                                  

  -  Video output: /Users/valeriiasysoeva/WebstormProjects/hacker_noon_task/cypress/videos/validUrl.spec.js.mp4


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  brokenUrl.spec.js                        00:03        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  performanceTesting.spec.js               00:07        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  validUrl.spec.js                         00:07        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:18        6        6        -        -        -  
```
