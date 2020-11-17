
import './history.scss';

import React from 'react';
// import './history.scss';
export default function History(props) {
  let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
  return (
    <>
      {history.map((item) => {
        return (
          <li className='1' onClick={handelClick} key={item.method + item.url}>
            <span id="s1">{item.method}</span>
            <span id="s2">{item.url}</span>
          </li>
        );
      })}
    </>
  );
}
function handelClick(e) {
    console.log("event",e.currentTarget, e.currentTarget.childNodes[1].firstChild.data,e.currentTarget.childNodes[0].firstChild.data)
  const informationRelod = { url: e.currentTarget.childNodes[1].firstChild.data, method: e.currentTarget.childNodes[0].firstChild.data };
  const selected = document.getElementById(`url`);
  selected.value = informationRelod.url;
  console.log(selected.value)
  const radiobtn = document.getElementById(informationRelod.method);
  radiobtn.checked = true;
  const button = document.getElementById('btn');
  button.click();
}