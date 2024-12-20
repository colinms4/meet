import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(currentNOE);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);

        if (isNaN(value) || value < 0) {
            setErrorAlert("Please enter a valid number");
        } else if (value > 32) {
            setErrorAlert("32 is the maximum");
        } else {
            setErrorAlert("");
            setCurrentNOE(value);
        }
    };

    return (
        <div id="numberOfEvents">
            <label id="number">
                Number of Events:
            </label>
            <input
                type="text"
                className="number"
                value={number}
                onChange={handleInputChanged}
                data-testid="event-input"
            />
        </div>
    )
}

export default NumberOfEvents;