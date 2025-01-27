import React from 'react'

function Naslov({ikona, naslov}) {
  return (
    <div className="naslov">
        <div className="ikona">
          <span className="material-symbols-outlined"> {ikona} </span>
        </div>
        <div className="tekst">
          <p>{naslov}</p>
        </div>
      </div>
  )
}

export default Naslov