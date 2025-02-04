import React, { useState, useEffect } from "react";

const SearchBar = ({ searchTerm, setSearchTerm, orderBy, setOrderBy, handleSearch }) => {
    return (
        <div className="container mt-3">
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Cerca per nome o cognome"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select className="form-select mb-2" value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
                <option value="none">Nessun ordinamento</option>
                <option value="nome">Ordina per Nome</option>
                <option value="cognome">Ordina per Cognome</option>
            </select>
            <button onClick={handleSearch} className="ms-toggle-btn">Cerca</button>
        </div>
    );
};

export default SearchBar;
