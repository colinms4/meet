import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li>
            <div className="event-summary">
                <h2>{event.summary}</h2>
                <p>{event.location}</p>
                <p>{event.created}</p>
            </div>
            {showDetails ? (
                <div data-testid="event-details">
                    <p>{event.description}</p>
                </div>
            ) : null}
            <button className="showDetailsButton"
                onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "hide details" : "show details"}
            </button>
        </li>
    );
}

export default Event;