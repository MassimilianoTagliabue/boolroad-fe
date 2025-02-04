import TravelerCard from "../components/TravelerCard";
import viaggiatori from "../data/DataVoyager";
import viaggi from "../data/DataTravel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleTravel() {

    const { id } = useParams();
    const idViaggio = parseInt(id) - 1;
    const navigate = useNavigate();



    const partecipanti = viaggiatori.filter((curTraveler) => {

        if (viaggi[idViaggio].partecipanti_id.includes(curTraveler.id)) {

            return curTraveler;

        }
    })

    const [filteredPartecipanti, setfilteredPartecipanti] = useState(partecipanti)
    const [orderBy, setOrderBy] = useState("none")

    useEffect(() => {
        let sortedPartecipanti = [...filteredPartecipanti];

        if (orderBy === "nome") {
            sortedPartecipanti.sort((a, b) => a.nome.localeCompare(b.nome));
        } else if (orderBy === "cognome") {
            sortedPartecipanti.sort((a, b) => a.cognome.localeCompare(b.cognome));
        }

        setfilteredPartecipanti(sortedPartecipanti);
    }, [orderBy]);




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
                    <img src={`http://localhost:5173/${viaggi[idViaggio].immagine}`} className="card-img-top" alt="..." />
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
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{viaggi[idViaggio].partenza}</li>
                        <li className="list-group-item">{viaggi[idViaggio].ritorno}</li>
                        <li className="list-group-item">{viaggi[idViaggio].tutor}</li>
                    </ul>
                </div>


                <h2 className="mt-5 text-center text-white">Partecipanti</h2>
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