import { useEffect, useState } from "react"
import AppCardHome from "./AppCardHome";

const EventList = ({ events }) => {
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [otherEvents, setOtherEvents] = useState([]);

    useEffect(() => {
        const today = new Date();

    const upComingTrips = events.filter(event => {
        const dataPartenza = new Date(event.partenza);
        const dataRitorno = new Date(event.ritorno)
        return dataPartenza <= today && dataRitorno >= today; 
    });

    const futureTrips = events.filter(event => {
        const dataPartenza = new Date(event.partenza);
        return dataPartenza > today;
    })

    setFilteredEvents(upComingTrips);
    setOtherEvents(futureTrips);

}, [events]);
    
    return (
        <div>
            <h2 className="secondary-title">Viaggi in corso</h2>
            <ul>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => (
                            <div className="card my-3" key={event.id}>
                                <AppCardHome curViaggio={event} />
                            </div>
                    ))
                ) : (
                    <p>Nessun viaggio in corso</p>
                )}
            </ul>
            <h2 className="secondary-title">Viaggi in programma</h2>
            <ul>
                {otherEvents.length > 0 ? (
                    otherEvents.map(event => (
                        <div className="card my-3" key={event.id}>
                                <AppCardHome curViaggio={event} />
                            </div>
                    ))
                ) : (
                    <p>Non ci sono viaggi in programma</p>
                )} 
            </ul>
        </div>
    );
};

export default EventList;