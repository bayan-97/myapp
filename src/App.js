

import React from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

import Results from './Results';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Count:0 ,
      Results :[],
      headers:{},
      num:0,
    };
  }
  handleForm = (count,results,header) => {
    console.log('Hi from the App', results);
    this.setState({Count:count,Results:results,headers:header });
  };
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
    // console.log(this);
    return (
      <>
       
        <Header  />
 
        <Form title={'Get Star Wars People'} handler={this.handleForm} num={this.num} />
        <Results  count={this.state.Count} results ={this.state.Results}  header={this.state.headers} />
        <Footer />
      </>
    );
  }
}

export default App;


// function App() {
//   return (
//     <>
//       <Header />
//       <Main/>
//       <Footer />
//     </>
//   );
// }


