import React from 'react'

function ProfVjestine({vjestine = []}) {
  return (
    <div className="vjestine prof_vjestine">
        {
            vjestine.map((vjestina,index) => (
                <div key={index} className="vjestina">
                    <p className="naziv">{vjestina.naziv}</p>
                    <div style={{ '--width': `${vjestina.broj}%` }} className="progres" data-value={vjestina.broj}></div>
                </div>
            ))
        }
    </div>
  )
}

export default ProfVjestine