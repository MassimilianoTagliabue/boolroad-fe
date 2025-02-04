import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreaViaggio() {
    const [meta, setMeta] = useState("");
    const [partenza, setPartenza] = useState("");
    const [ritorno, setRitorno] = useState("");
    const [tutor, setTutor] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nuovo viaggio:", { meta, partenza, ritorno, tutor });
        navigate("/"); 
    };

    return (
        <div className="container mt-4 ms-tx-white">
            <h2>Crea un Nuovo Viaggio</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Meta</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={meta} 
                        onChange={(e) => setMeta(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Data di Partenza</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={partenza} 
                        onChange={(e) => setPartenza(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Data di Ritorno</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={ritorno} 
                        onChange={(e) => setRitorno(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tutor</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={tutor} 
                        onChange={(e) => setTutor(e.target.value)} 
                    />
                </div>
                <button type="submit" className="ms-toggle-btn">Salva Viaggio</button>
            </form>
        </div>
    );
}

export default CreaViaggio;