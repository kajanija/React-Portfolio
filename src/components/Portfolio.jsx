import React from 'react'

function Portfolio({portfolio = []}) {
  return (
    <div className="portfolio margin_bottom">
        {portfolio.map((item,index) => (
            <div className="projekat">
                <a href={item.url}>
                    <div className="slika_projekta">
                        <img src={item.slika} alt="" />
                        <div className="kategorija">
                            <p>{item.kategorija}</p>
                            </div>
                        </div>
                </a>
            </div>
        ))}
    </div>
  )
}

export default Portfolio