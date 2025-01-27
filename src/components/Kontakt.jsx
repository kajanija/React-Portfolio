import React from 'react'

function Kontakt({kontakti = []}) {
  return (
    <div className="linkovi kontakt">
    {
        kontakti.map((kontakt, index) => (
            <div key={index} className="link">
                <span className="material-symbols-outlined">{kontakt.ikona}</span>
                <p>{kontakt.tekst}</p>
            </div>
        ))
    }
    </div>
  )
}

export default Kontakt