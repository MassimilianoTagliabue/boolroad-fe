import React, { useState } from "react";

const SearchBar = ({ partecipanti, setfilteredPartecipanti, OrderBy, setOrderBy }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = () => {

        let filtered = partecipanti.filter(p => 
            p.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
            p.cognome.toLowerCase().includes(searchTerm.toLowerCase())
        )   
        setfilteredPartecipanti(filtered)
    }

    

    return (
        <div className="container mt-3">
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Cerca per nome o cognome"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select className="form-select mb-2" value={OrderBy}
                onChange={(e) => setOrderBy(e.target.value)}>
                <option value="none">Nessun ordinamento</option>
                <option value="nome">Ordina per Nome</option>
                <option value="cognome">Ordina per Cognome</option>
            </select>
            <button onClick={handleSearch}>Cerca</button>
        </div>
    );
};

export default SearchBar;