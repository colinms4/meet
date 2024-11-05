import { defineFeature, loadFeature } from "jest-cucumber";
import { render } from "@testing-library/react";
import App from "../App";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When a user hasnt specified an number, 32 events are displayed by default', ({ given, when, then }) => {
        let AppComponent;
        let NumberOfEventsComponent;
        let AppDOM;
        given('A user is on the event listing page', () => {
            AppComponent = render(<App />);
        });

        when('The user hasn\'t input a number into the menu', () => {
            AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            NumberOfEventsComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={() => { }} setErrorMessage={() => { }} />, { container: EventListDOM });
            expect(NumberOfEventsComponent).toBeTruthy();
        });

        then('A list of 32 events are displayed on the events listing page', () => {
            const input = NumberOfEventsComponent.getByRole('textbox');
            expect(input).toHaveValue('32');
        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
        let NumberOfEventsComponent;
        let AppDOM;
        given('A user is on the event listing page', () => {
            AppComponent = render(<App />);
        });

        when('The user inputs a number into the menu', async () => {
            const EventListDOM = AppComponent.container.querySelector('#event-list');
            NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorMessage={() => { }} />, { container: EventListDOM });
            const user = userEvent.setup();
            const EventNumber = NumberOfEventsComponent.getByRole('textbox');
            await user.type(EventNumber, '{backspace}{backspace}10');
        });

        then('A list of events is displayed based on the number input by the user', () => {
            expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('10');
        });
    });

})
