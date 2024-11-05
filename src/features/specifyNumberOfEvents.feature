Feature: Specify number of events
    Scenario: When a user hasnt specified an number, 32 events are displayed by default
        Given A user is on the event listing page
        When The user hasn't input a number into the menu
        Then A list of 32 events are displayed on the events listing page

    Scenario: User can change the number of events displayed.
        Given A user is on the event listing page
        When The user inputs a number into the menu
        Then A list of events is displayed based on the number input by the user