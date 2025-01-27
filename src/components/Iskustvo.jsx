import React from 'react'

function Iskustvo({iskustva = []}) {
  return (
    <div className="clanci edukacija">
        {
            iskustva.map((iskustvo,index) => (
                <div key={index} className="clanak">
                    <div className="tacka"></div>
                    <div className="naziv">
                        <p>{iskustvo.naziv}</p>
                    </div>
                    <div className="detaljno">
                        <p className="pozicija">{iskustvo.pozicija}</p>
                        <p className="vrijeme">{iskustvo.vrijeme}</p>
                        <p className="tekst_clanka">{iskustvo.tekst}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Iskustvo