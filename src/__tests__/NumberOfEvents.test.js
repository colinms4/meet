import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents setCurrentNOE={() => { }}
                setErrorAlert={() => { }}
            />
        )
    });

    test('element contains the role for input textbox', () => {
        const inputTextbox = NumberOfEventsComponent.queryByRole('textbox')
        expect(inputTextbox).toBeInTheDocument();
    });

    test('value of the textbox is 32', () => {
        const textboxValue = NumberOfEventsComponent.queryByRole('textbox')
        expect(textboxValue).toBeInTheDocument('32');
    });

    test('ensures the value of the component changes when a user types', async () => {
        const user = userEvent.setup();
        const eventValue = NumberOfEventsComponent.queryByRole('textbox')

        await user.type(eventValue, '{backspace}{backspace}10');
        expect(eventValue).toHaveValue('10');
    })

})