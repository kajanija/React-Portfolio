import React from 'react';

function Biografija({ tekst = [] }) {
  return (
    <div className="tekst_komad biografija">
      {tekst.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Biografija;