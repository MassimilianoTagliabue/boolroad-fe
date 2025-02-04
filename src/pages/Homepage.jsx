import FilteredEventsForDate from "../components/FilteredEventsForDate";
import viaggi from "../data/dataArray";


function HomePage() {
    console.log(viaggi)


    return (
        <>
        <div className="bg-color">
            <h1 id="title-home-page">Consulta i tuoi viaggi</h1>
            <div className="container">
                <FilteredEventsForDate events={viaggi} />
            </div>
        </div>
        </>
    );
};

export default HomePage;