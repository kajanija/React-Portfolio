import React from 'react'
import Biografija from './Biografija'
import Kontakt from './Kontakt'
import Naslov from './Naslov'
import Zaglavlje from './Zaglavlje'
import Linkovi from './Linkovi'
import data from '../assets/data.json'

function Sidebar() {
  return (
    <div className="lijevo">
      <Zaglavlje  zaglavlje={data.zaglavlje} />
      <Naslov ikona='book' naslov='biografija' />
      <Biografija tekst={data.biografija} />
      <Naslov ikona='person' naslov='kontakt' />
      <Kontakt kontakti={data.kontakti}/>
      <Naslov ikona='cloud' naslov='linkovi' />
      <Linkovi linkovi={data.linkovi} />
    </div>
  )
}

export default Sidebar