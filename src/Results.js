import React from 'react';
import ReactJson from 'react-json-view'
export default function Results({count,results,header}) {
  return (
   <div>
     <p>count:{count}</p>
     <p><ReactJson name="Header" src={header} theme="monokai" /></p>
     <p>response:<ReactJson  name="response" src={results} theme="monokai" /></p>
   </div>
  );
}