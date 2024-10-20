# Basic Project Information 
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# Stories and Scenarios 
**1. Filter events by city** 
>As a user, 
>I should able to filter events by city,
>So I can find events in my city.

**Scenario #1 When user hasn't searched for a city, show upcoming events from all cities.** <br />
Given: A user is on the events listing page <br />
When: A user hasn't input any information into the searchbar <br />
Then: The app shows events fromm all cities <br />

**Scenario #2 User should see a list of suggestions when they search for a city.** <br />
Given: A user is on the event listing page <br />
When: A user searches for a city on the page <br />
Then: The user recieves a list of event suggestions based on which city they provided. <br />

**Scenario #3 User can select a city from the suggested list** <br />
Given: A user is on the event page <br />
When: The user selects a city from the list <br />
Then: The user can see events in the area from which city they selected <br />

**2. Show/Hide Event Details:**
>As a user,
>I should be able to hit a button in the UI,
>So that I can see or hide details.

**Scenario #1 An event element is collapsed by default.** <br />
Given: A user hasnt clicked on an event <br />
When: The user view a list of events <br />
Then: The event elements are collapsed <br />

**Scenario #2 User can expand an event to see details.** <br />
Given: The list of events displayed  <br />
When: The user clicks on an event  <br />
Then: The event element expanded to show event details  <br />

**Scenario #3 User can collapse an event to hide details.**  <br />
Given: The event element has been expanded  <br />
When: The user clicks to collapse the event element  <br />
Then: The event element is collapsed back to default position  <br />

**3. Specify number of events:**
>As a user,
>I should be able to type in a form,
>So that I can specify how many events I want to see.

**Scenario #1 When a user hasnt specified an number, 32 events are displayed by default** <br />

Given: A user is on the event listing page <br />
When: The user hasn't input a number into the menu <br />
Then: A list of 32 events are displayed on the events listing page <br />

**Scenario #2 User can change the number of events displayed.** <br />

Given: A user is on the event listing page <br />
When: The user inputs a number into the menu <br />
Then: A list of events is displayed based on the number input by the user <br />

**4. Use the app when offline:**
>As a user,
>I should be able to use the app when offline,
>So that I can still browse the app with cached data while offline.

**Scenario #1 Show cached data when theres no internet connection** <br />

Given: A user loses internet connection <br />
When: The user tries to navigate the application <br />
Then: The site is still accessible while offline because of the cached data <br />

**Scenario #2 Show error when user changes search settings (city, number of events)**

Given: A user lost internet connection while on the app <br />
When: A user tries to change the search settings <br />
Then: The app displays an error because no internet connection <br />

**5. Add an app shortcut to the home screen:**
>As a user, 
>I should be able to hit a icon that directs me to the home screen, 
>So that I can easily get back to the main view.

**Scenario #1 User can install the meet app as a shortcut on their device home screen** <br />

Given: The user has the app installed on their device <br />
When: They click the shortcut icon for the app <br />
Then: The application opens for the user <br />

**6. Display charts visualizing event details:** 
>As a user, 
>I should be able to see charts on the app, 
>So that I can easily visualize and see event details.

**Scenrio #1 Show a chart with the number of upcoming events in each city** <br />

Given: The user is on the event details page <br />
When: They click on the view charts button for a specfic city <br />
Then: The event charts are displayed for the user of that particular city  <br />
