import React from 'react'
import Naslov from './Naslov'
import Izradio from './Izradio'
import Edukacija from './Edukacija'
import Iskustvo from './Iskustvo'
import data from '../assets/data.json'
import ProfVjestine from './ProfVjestine'
import LicneVjestine from './LicneVjestine'
import Portfolio from './Portfolio'

function MainContent() {
  return (
    <div className="desno">
      <Naslov ikona='school' naslov='edukacija' />
      <Edukacija edukacije={data.edukacija} />
      <Naslov ikona='work' naslov='radno sikustvo' />
      <Iskustvo iskustva={data.iskustvo} />
      <Naslov ikona='trending_up' naslov='profesionalne vještine' />
      <ProfVjestine vjestine={data.prof_vjestine} />
      <Naslov ikona='settings_accessibility' naslov='lične vještine' />
      <LicneVjestine vjestine={data.licne_vjestine} />
      <Naslov ikona='fitness_center' naslov='portfolio' />
      <Portfolio portfolio={data.portfolio}/>
      <Izradio />
    </div>
  )
}

export default MainContent