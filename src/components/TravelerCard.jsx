import { useState } from "react";

function TravelerCard({ traveler }) {

    const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ms-card ms-border-green">
      <div className="ms-card-header">
        <h2>{traveler.nome} {traveler.cognome}</h2>
        <button onClick={toggleDetails} className="ms-toggle-btn">
          {isOpen ? 'Nascondi Dettagli' : 'Mostra Dettagli'}
        </button>
      </div>
      {isOpen && (
        <div className="ms-card-details">
          <p>Email: {traveler.email}</p>
          <p>Telefono: {traveler.nome}</p>
          <p>Codice codice fiscale: {traveler.codiceFiscale}</p>
        </div>
      )}
    </div>
  );
}

export default TravelerCard;