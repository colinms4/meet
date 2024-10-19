# Basic Project Information 
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# Stories and Scenarios 
**1. Show/Hide Event Details:**
>As a user,
>I should be able to hit a button in the UI,
>So that I can see or hide details.

Given: A user wants to find an event  <br />
When: The user clicks a button on the page <br />
Then: The event is displayed or hidden  <br />


**2. Specify number of events:**
>As a user,
>I should be able to type in a form,
>So that I can specify how many events I want to see.

Given: A user is on the event listing page  <br />
When: The user inputs a number into the menu <br />
Then: A list of events is displayed based on the input of the user <br />

**3. Use the app when offline:**
>As a user,
>I should be able to use the app when offline,
>So that I can still browse the app with cached data while offline.

Given: A user loses internet connection <br />
When: The user tries to navigate the application <br />
Then: The site is still accessible while offline <br />

**4. Add an app shortcut to the home screen:**
>As a user, 
>I should be able to hit a icon that directs me to the home screen, 
>So that I can easily get back to the main view.

Given: The user has the app installed on their device <br />
When: They click the icon for the app <br />
Then: The application opens for the user <br />

**5. Display charts visualizing event details:** 
>As a user, 
>I should be able to see charts on the app, 
>So that I can easily visualize and see event details.

Given: The user is on the event details page <br />
When: They click on the view charts button <br />
Then: The charts are displayed for the user <br />
