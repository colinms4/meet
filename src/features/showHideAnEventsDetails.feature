Feature: Show/Hide event details
    Scenario: An event element is collapsed by default.
        Given A user hasnt clicked on an event
        When The user views a list of events
        Then The event elements are collapsed

    Scenario: User can expand an event to see details.
        Given The list of events displayed
        When The user clicks on an event
        Then The event element expanded to show event details

    Scenario: User can collapse an event to hide details.
        Given The event element has been expanded
        When The user clicks to collapse the event element
        Then The event element is collapsed back to default position