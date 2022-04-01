﻿# courseAPI-UIAutomationNightWatch-JS

## Excecution both scripts

PS C:\Users\juan.davila\Documents\vs-code-workspace\Unosquare> npm test -- --tag night

> unosquare@1.0.0 test
> nightwatch "--tag" "night"


[Nightwatchjs Test] Test Suite
────────────────────────────────────────────────────────────
ℹ Connected to ChromeDriver on port 4444 (632ms).
  Using: chrome (99.0.4844.84) on WINDOWS.


  Running Demo test nightwatch:
───────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ℹ Loaded url https://nightwatchjs.org/ in 5082ms
  √ Element <body> was visible after 58 milliseconds.
  √ Element <.DocSearch-Hit> was visible after 581 milliseconds.
  √ Element <li a[href='/api/']> was visible after 31 milliseconds.
  √ "API Commands" side bar exists (46ms)
   Response 500 POST /session/3cafbac8cd00c434652f7c5aa725c8b6/actions (19ms)
   {
     value: {
       error: 'move target out of bounds',
       message: 'move target out of bounds\n  (Session info: chrome=99.0.4844.84)',
       stacktrace: ''
     }
  }
 Error while running .moveTo() protocol action: move target out of bounds
  (Session info: chrome=99.0.4844.84)

   Response 500 POST /session/3cafbac8cd00c434652f7c5aa725c8b6/actions (26ms)
   {
     value: {
       error: 'move target out of bounds',
       message: 'move target out of bounds\n  (Session info: chrome=99.0.4844.84)',
       stacktrace: ''
     }
  }
   Response 500 POST /session/3cafbac8cd00c434652f7c5aa725c8b6/actions (16ms)
   {
     value: {
     }
  }
   Response 500 POST /session/3cafbac8cd00c434652f7c5aa725c8b6/actions (11ms)
   {
     value: {
       error: 'move target out of bounds',
       message: 'move target out of bounds\n  (Session info: chrome=99.0.4844.84)',
       stacktrace: ''
     }
{
  value: 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.',
  status: 0

OK. 5 assertions passed. (11.469s)
PS C:\Users\juan.davila\Documents\vs-code-workspace\Unosquare>
PS C:\Users\juan.davila\Documents\vs-code-workspace\Unosquare> git status
On branch secondPullRequest2Scripts
Your branch is up to date with 'origin/secondPullRequest2Scripts'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   tests/nightwatchjsTest.js
PS C:\Users\juan.davila\Documents\vs-code-workspace\Unosquare> npm test -- --tag night

> unosquare@1.0.0 test      
> nightwatch "--tag" "night"


[Nightwatchjs Test] Test Suite
────────────────────────────────────────────────────────────
ℹ Connected to ChromeDriver on port 4444 (723ms).
  Using: chrome (99.0.4844.84) on WINDOWS.


  Running Demo test nightwatch:
───────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ℹ Loaded url https://nightwatchjs.org/ in 4660ms
  √ Element <body> was visible after 59 milliseconds.
  √ Element <.DocSearch-Hit> was visible after 593 milliseconds.
  √ Element <li a[href='/api/']> was visible after 46 milliseconds.
  √ "API Commands" side bar exists (51ms)
   Response 500 POST /session/869e50ad2d8edf9de51fd82a3669dd36/actions (20ms)
   {
     value: {
       error: 'move target out of bounds',
       message: 'move target out of bounds\n  (Session info: chrome=99.0.4844.84)',
       stacktrace: ''
     }
  }
 Error while running .moveTo() protocol action: move target out of bounds
  (Session info: chrome=99.0.4844.84)

   Response 500 POST /session/869e50ad2d8edf9de51fd82a3669dd36/actions (24ms)
   {
     value: {
       error: 'move target out of bounds',
       message: 'move target out of bounds\n  (Session info: chrome=99.0.4844.84)',
       stacktrace: ''
     }
  }
   Response 500 POST /session/869e50ad2d8edf9de51fd82a3669dd36/actions (12ms)
   {
     value: {
PS C:\Users\juan.davila\Documents\vs-code-workspace\Unosquare> npm test

> unosquare@1.0.0 test
> nightwatch


[Nightwatchjs Test] Test Suite
────────────────────────────────────────────────────────────
ℹ Connected to ChromeDriver on port 4444 (701ms).
  Using: chrome (99.0.4844.84) on WINDOWS.


  Running Demo test nightwatch:
───────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ℹ Loaded url https://nightwatchjs.org/ in 4042ms
  √ Element <body> was visible after 54 milliseconds.
  √ Element <.DocSearch-Hit> was visible after 699 milliseconds.
  √ Element <li a[href='/api/']> was visible after 45 milliseconds.
  √ "API Commands" side bar exists (56ms)
   Response 500 POST /session/60d016e1f4575875c75704e0774ed455/actions (20ms)
   {
     value: {
       error: 'move target out of bounds',
       message: 'move target out of bounds\n  (Session info: chrome=99.0.4844.84)',
       stacktrace: ''
     }
  }
 Error while running .moveTo() protocol action: move target out of bounds
  (Session info: chrome=99.0.4844.84)

   Response 500 POST /session/60d016e1f4575875c75704e0774ed455/actions (20ms)
   {
     value: {
       error: 'move target out of bounds',
       message: 'move target out of bounds\n  (Session info: chrome=99.0.4844.84)',
       stacktrace: ''
     }
  }
   Response 500 POST /session/60d016e1f4575875c75704e0774ed455/actions (18ms)
   {
     value: {
       error: 'move target out of bounds',
       message: 'move target out of bounds\n  (Session info: chrome=99.0.4844.84)',
       stacktrace: ''
     }
  }
   Response 500 POST /session/60d016e1f4575875c75704e0774ed455/actions (7ms)
   {
     value: {
       error: 'move target out of bounds',
       message: 'move target out of bounds\n  (Session info: chrome=99.0.4844.84)',
       stacktrace: ''
     }
  }
{
  value: 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy; it is now being maintained at BrowserStack with help from all our contributors.',
  status: 0
}
  √ Testing if element <.footer-text> contains text 'Nightwatch.js was initially created in Oslo, Norway by Pineview.io – an independent software consultancy;' (37ms)

OK. 5 assertions passed. (11.101s)

[Unosquare] Test Suite
────────────────────────────────────────────
ℹ Connected to ChromeDriver on port 4444 (611ms).
  Using: chrome (99.0.4844.84) on WINDOWS.


  Running Demo test unosquare:
───────────────────────────────────────────────────────────────────────────────────────────────────────────────
  ℹ Loaded url https://www.unosquare.com in 2636ms
  √ Element <body> was visible after 34 milliseconds.
  √ Testing if attribute 'alt' of element <a.navbar-brand img> contains 'Unosqu' (31ms)
  √ Testing if attribute 'alt' of element <a.navbar-brand img> equals 'Unosquare' (31ms)
  √ Testing if element <.navbar-brand> has css property 'height: 74px' (45ms)
  √ Testing if value of element <.navbar-brand> doesn't equal 'X' (33ms)
  √ Testing if element <.navbar-brand> is visible (35ms)
DEPRECATED: the assertion .title() has been deprecated and will be removed from future versions. Use assert.titleEquals().
  √ Testing if the page title equals 'Digital Transformation Services | Agile Staffing Solutions | Unosquare' (22ms)
  √ Testing if the URL contains 'unosquare' (10ms)

OK. 8 assertions passed. (3.196s)

OK. 13  total assertions passed (15.798s)
