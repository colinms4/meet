// src/__tests__/App.test.js

import { render, within } from '@testing-library/react';
import App from '../App';
import { act } from 'react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    })

    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

    test('make sure NumberOfEvents renders correctly into app.js', () => {
        expect(AppDOM.querySelector('#numberOfEvents')).toBeInTheDocument();
    })

});

describe('<App /> integration', () => {
    test('renders a list of events matching the city selected by the user', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        const CitySearchDOM = AppDOM.querySelector('#city-search');
        const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

        await user.type(CitySearchInput, "Berlin");
        const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
        await user.click(berlinSuggestionItem);

        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

        const allEvents = await getEvents();
        const berlinEvents = allEvents.filter(
            event => event.location === 'Berlin, Germany'
        );

        expect(allRenderedEventItems.length).toBe(berlinEvents.length);
        allRenderedEventItems.forEach(event => {
            expect(event.textContent).toContain("Berlin, Germany");
        });
    });

    test('ensure the number of events rendered matches the number of events inputted by the user', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        const numberOfEventsDOM = AppDOM.querySelector('#numberOfEvents');
        const eventInput = within(numberOfEventsDOM).queryByTestId('event-input');
        await user.type(eventInput, `{backspace}{backspace}10`);

        const eventListDOM = AppDOM.querySelector('#event-list');
        const listOfEvents = within(eventListDOM).queryAllByRole('listitem');
        expect(listOfEvents.length).toBe(10);
    });
});