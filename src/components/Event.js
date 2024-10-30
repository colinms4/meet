import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="event-summary">
            <h2>{event.summary}</h2>
            <p>{event.location}</p>
            <p>{event.created}</p>
            {showDetails ? (
                <p data-testid="event-details">{event.description}</p>
            ) : null}
            <button className="showDetailsButton"
                onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "hide details" : "show details"}
            </button>
        </li>
    );
}

export default Event;