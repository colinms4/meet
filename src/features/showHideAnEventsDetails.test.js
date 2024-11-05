import { defineFeature, loadFeature } from "jest-cucumber";
import { render, waitFor, within, screen } from "@testing-library/react";
import App from "../App";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('A user hasnt clicked on an event', () => {
            AppComponent = render(<App />);
        });

        when('The user views a list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventDOM).queryAllByRole('listitem');
                expect(EventListItems).toHaveLength(32);
            });
        });

        then('The event elements are collapsed', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('#event-details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('The list of events displayed', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            const EventDOM = EventComponent.container.querySelector('.event-summary');
            expect(EventDOM).toBeInTheDocument();
        });

        when('The user clicks on an event', async () => {
            const user = userEvent.setup();
            const showDetails = EventComponent.queryByText('show details');
            await user.click(showDetails);
        });

        then('The event element expanded to show event details', () => {
            const eventDetails = screen.getByTestId('event-details');
            expect(eventDetails).toBeInTheDocument();
        });
    });


    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;
        given('The event element has been expanded', async () => {
            const user = userEvent.setup();
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            const showDetails = EventComponent.queryByText('show details');
            await user.click(showDetails);
        });

        when('The user clicks to collapse the event element', async () => {
            const user = userEvent.setup();
            const hideDetails = EventComponent.queryByText('hide details');
            await user.click(hideDetails);
        });

        then('The event element is collapsed back to default position', () => {
            const eventDetails = EventComponent.container.querySelector('#event-details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

});