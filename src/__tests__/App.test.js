// src/__tests__/App.test.js

import { render } from '@testing-library/react';
import App from '../App';
import { act } from 'react';

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