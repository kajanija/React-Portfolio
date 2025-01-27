import React from 'react'

function LicneVjestine({vjestine = []}) {
  return (
    <div className="vjestine licne_vjestine">
        {
            vjestine.map((vjestina,index) => (
                <div key={index} className="vjestina"><p className="naziv">{vjestina.naziv}</p>
                    <div className="ocjene">
                    {
                        [...Array(vjestina.ocjena)].map((_, index) => (
                            <span key={index} className="ocjena cijela"></span>
                        ))
                    }
                    {
                        [...Array(5 - vjestina.ocjena)].map((_, index) => (
                            <span key={index} className="ocjena"></span>
                        ))
                    }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default LicneVjestine