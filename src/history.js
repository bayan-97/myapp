
import React from 'react';
import './history.scss';
import ReactJson from 'react-json-view';
import { Link } from 'react-router-dom';
// import { delete } from 'superagent';

// import './history.scss';
class History extends React.Component  {
  constructor(props) {
    super(props)
  
    this.state = {body:[]
    ,url:'',method:''}
  }
  handelClick(body) {
    this.setState({body:body.data,url:body.url,method:body.method})
  }
  
  render(){
    let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];

    return (
      <>
      
        {history.map((item) => {
   
          return (
            <>
            <div id ="div">
            <ul id="historynew">
            <li className='1'key={item.method + item.url+item.data}>
              <button  onClick={() =>{ 
             
                this.handelClick(item)
                
                }} >
              <span id="s1">{item.method}</span>
              <span id="s2">{item.url}</span>
         
               
              </button>
            </li>

            </ul>
             </div>
          
           <p >
             
             response:<ReactJson name="response" src={this.state.body} theme="monokai" />
             <span>
           <Link
          to={{ pathname: '/', user: { url:this.state.url , method:this.state.method  ,body:this.state.body} }}
        >
         re run
        </Link>
           </span> </p>
     
         </>
          );
        })}
     
      </>
    );
  }
}
export default History;