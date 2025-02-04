import TravelerCard from "../components/TravelerCard";
import viaggiatori from "../data/DataVoyager";
import viaggi from "../data/DataTravel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

function SingleTravel() {

    const { id } = useParams();
    const idViaggio = parseInt(id) - 1;
    const navigate = useNavigate();

    const partecipanti = viaggiatori.filter((curTraveler) => {

        if (viaggi[idViaggio].partecipanti_id.includes(curTraveler.id)) {
            return curTraveler;
        }
    })

    const [partecipante, setPartecipante] = useState([])
    const [filteredPartecipanti, setFilteredPartecipanti] = useState([partecipanti])
    const [orderBy, setOrderBy] = useState("none")
    const [searchTerm, setSearchTerm] = useState("");

    // Carichiamo i partecipanti all'inizio
    useEffect(() => {
        const partecipantiViaggio = viaggiatori.filter(curTraveler =>
            viaggi[idViaggio].partecipanti_id.includes(curTraveler.id)
        );
        setPartecipante(partecipantiViaggio);
        setFilteredPartecipanti(partecipantiViaggio);
    }, [idViaggio]);

    // Funzione di ricerca manuale
    const handleSearch = () => {
        let filtered = partecipanti.filter(p =>
            p.nome.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
            p.cognome.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );

        if (orderBy === "nome") {
            filtered.sort((a, b) => a.nome.localeCompare(b.nome));
        } else if (orderBy === "cognome") {
            filtered.sort((a, b) => a.cognome.localeCompare(b.cognome));
        }

        setFilteredPartecipanti(filtered);
    };


    return (
        <>
            <div className="container">
                {/* Titolo e Bottone */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <h2 className="text-center mt-3 text-white">Destinazione</h2>
                    <button className="ms-toggle-btn" onClick={() => navigate("/crea-viaggio")}>
                        + Nuovo Viaggio
                    </button>
                </div>
                <div className="card col my-3 ">
                    <div className="card container-grid" style={{ backgroundImage: `url(http://localhost:5173/${viaggi[idViaggio].immagine}` }}>
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="detail-card">
                                    <h4>Dettagli viaggio</h4>
                                    <span>Data di partenza: {viaggi[idViaggio].partenza}</span> <br />
                                    <span>Data di ritorno: {viaggi[idViaggio].ritorno}</span> <br />
                                    <span>Numero di partecipanti: {viaggi[idViaggio].partecipanti_id.length}</span> <br />
                                    <span>Tutor del gruppo: {viaggi[idViaggio].tutor}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <h2 className="mt-5 text-center text-white">Partecipanti</h2>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} orderBy={orderBy} setOrderBy={setOrderBy} handleSearch={handleSearch} />

                {/* card */}
                <div className="container">
                    <div className="row row-cols-2 row-cols-lg-3 justify-content-around ">
                        {filteredPartecipanti.map((curTraveler) => {
                            return (
                                <TravelerCard
                                    key={curTraveler.id}
                                    traveler={curTraveler}
                                />
                            )
                        })}

                    </div>
                </div>


            </div>


        </>
    )
}

export default SingleTravel;