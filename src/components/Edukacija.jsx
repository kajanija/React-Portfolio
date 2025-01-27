import React from 'react'

function Edukacija({edukacije = []}) {
  return (
    <div className="clanci edukacija">
        {
            edukacije.map((edukacija,index) => (
                <div key={index} className="clanak">
                    <div className="tacka"></div>
                    <div className="naziv">
                        <p>{edukacija.naziv}</p>
                    </div>
                    <div className="detaljno">
                        <p className="pozicija">{edukacija.pozicija}</p>
                        <p className="vrijeme">{edukacija.vrijeme}</p>
                        <p className="tekst_clanka">{edukacija.tekst}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Edukacija