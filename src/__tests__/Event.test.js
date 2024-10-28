import { render, screen } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";
import userEvent from "@testing-library/user-event";

const event = mockData[0];

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={event} />);
    });

    test('find events title', () => {
        const eventTitle = EventComponent.queryByText(event.summary)
        expect(eventTitle).toBeInTheDocument();
    });

    test('find elements start time', () => {
        const eventTime = EventComponent.queryByText(event.created)
        expect(eventTime).toBeInTheDocument();
    });

    test('find elements location', () => {
        const eventLocation = EventComponent.queryByText(event.location)
        expect(eventLocation).toBeInTheDocument();
    });

    test('renders event details button with the title show details', () => {
        const eventDetails = EventComponent.queryByText('show details');
        expect(eventDetails).toBeInTheDocument();
    });

    test('by default event details are hidden', () => {
        const eventListDetails = EventComponent.container.querySelector('.details')
        expect(eventListDetails).not.toBeInTheDocument();
    });

    test('shows details section when a user clicks on show details button', async () => {
        const user = userEvent.setup();
        const showDetails = EventComponent.queryByText('show details')
        await user.click(showDetails);

        const eventDetails = screen.getByTestId('event-details');
        expect(eventDetails).toBeInTheDocument();
    });

    test('hides details when the user clicks on the hide details button', async () => {
        const user = userEvent.setup();
        const hideDetails = EventComponent.queryByText('hide details')
        await user.click(hideDetails);

        const eventDetails = screen.queryByTestId('event-details')
        expect(eventDetails).not.toBeInTheDocument();
    });

});