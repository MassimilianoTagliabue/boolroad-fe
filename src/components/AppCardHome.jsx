import { Link } from "react-router-dom";

function AppCardHome({ curViaggio }) {
    // ARRAY DEI VIAGGIATORI
    const viaggiatori = curViaggio.partecipanti;

    return (
        <>
            <div className="card container-grid" style={{ backgroundImage: `url(${curViaggio.immagine})` }}>
                <div className="card-body">
                    <h3 >Viaggio a {curViaggio.meta}</h3> <hr />
                    <div className="d-flex">
                        <div className="detail-card">
                            <h4>Dettagli viaggio</h4>
                            <span>Data di partenza: {curViaggio.partenza}</span> <br />
                            <span>Data di ritorno: {curViaggio.ritorno}</span> <br />
                            <span>Numero di partecipanti: {curViaggio.partecipanti.length}</span> <br />
                            <span>Tutor del gruppo: {curViaggio.tutor}</span>
                        </div>
                        <div className="member-card">
                            <h4>Elenco dei partecipanti</h4>
                            <ul>
                                {viaggiatori.map((curViaggiatore) => {
                                    return (
                                        <li key={curViaggiatore.codiceFiscale}>{curViaggiatore.nome}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="align-content-center mx-4">
                        <Link to={`/travel/${curViaggio.id}`} className="btn btn-primary button-detail">Visualizza dettagli</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppCardHome;