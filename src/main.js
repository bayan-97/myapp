

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import './main.scss';

import Form from './Form';
import Footer from './Footer';
import History from './history';

import Results from './Results';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading:false,
      // request:{},
      history:[],
      Count:0 ,
      Results :[],
      headers:{},
      body:[],
      num:0,
    };
  }
  handleForm = (count,results,header,body) => {
    console.log('Hi from the App', results);
    this.setState({Count:count,Results:results,headers:header,body:body});
  };
  handle = (count,results,header,body) => {
    console.log('Hi from the App', results);
    this.setState({Count:count,Results:results,headers:header,body:body });
  };
  handleanotheMethod = (body) => {
    // console.log('Hi from the App', results);
    this.setState({body:body });
  };
 handelClick(e) {
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
  // handleDelete = (name) => {
  //   const newPeople = this.state.people.filter(
  //     (person) => person.name !== name
  //   );
  //   console.log(newPeople);
  //   this.setState({ people: newPeople });
  // };
  // PROPS
  // it helps us to send data and functions to components
  // it sent using normal html attribute format (x={y})
  render() {
    console.log("vvv",this.props.location)
    let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
    return (
      <> 
      
      <main>
        
    {history.map((item) => {
      return (
        <ul>

        <li className='1' onClick={this.handelClick} key={item.method + item.url}>
        
          <span id="s1">{item.method}</span>
          <span id="s2">{item.url}</span>

          
        </li>
        </ul>
      );
    })}
     <Form title={'Get Star Wars People'} handler={this.handleForm} handlerMethod={this.handleanotheMethod} num={this.num} user={this.props.location.user}/>
        <Results  count={this.state.Count} results ={this.state.Results}  header={this.state.headers} body={this.state.body}  />
  </main>
        {/* <ul><History  /></ul> */}
       
   
      </>
    );
  }
}

export default App;

// let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
// return (
//   <>
//   <main>
//     {history.map((item) => {
//       return (
//         <li className='1' onClick={handelClick} key={item.method + item.url}>
//           <button >
//           <span id="s1">{item.method}</span>
//           <span id="s2">{item.url}</span>

//           </button>
//         </li>
//       );
//     })}
//   </main>
//   </>
// );


