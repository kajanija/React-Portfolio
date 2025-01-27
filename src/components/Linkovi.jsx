import React from 'react'

function Linkovi({linkovi}) {
  return (
    <div className="linkovi social">
        {
        linkovi.map((link, index) => (
            <a href={link.url} key={index} className="link">
                <span className="material-symbols-outlined">{link.ikona}</span>
                <p>{link.tekst}</p>
            </a>
        ))
    }
    </div>
  )
}

export default Linkovi