import React from 'react'

function Zaglavlje({zaglavlje}) {
  return (
    <>
    <div className="slika">
        <img src={zaglavlje.slika} alt="" />
      </div>
      <div className="ime">
        <h1>{zaglavlje.ime}</h1>
        <h2>{zaglavlje.zanimanje}</h2>
      </div>
    </>
  )
}

export default Zaglavlje