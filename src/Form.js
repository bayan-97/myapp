
import './Form.scss';
import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { url: 'url',method:'GET' };
    
    }
  
    handleChange = (e) => {
      console.log('hi', this.state);
      this.setState({ url: e.target.value });
      
      console.log('helloooooo', this.state);
    };
    handleChangeRadio = (e) => {
      console.log('hi', this.state);
      this.setState({ method: e.target.value });
      
      console.log('helloooooo', this.state);
    };
    handleClick = (e) => {
        const url = this.state.url
        const method = this.state.method
  console.log(url,method)
      this.setState({url,method});
      console.log('hello');
      e.preventDefault();
    };
    render() {
      return (
        <main>
          <form>
          <label for="fname">URL:<input type="text" onChange={this.handleChange} /><button type="submit" onClick={this.handleClick}>GO!</button>
          </label>
          <br></br>
          <br></br>
          <label for="GET">GET<input type="radio" id="GET" name="method" onChange={this.handleChangeRadio} value="GET"></input></label>
           
           <label for="POST">POST <input type="radio" id="POST" name="method" onChange={this.handleChangeRadio} value="POST"></input></label>
           
         <label for="PUT">PUT <input type="radio" id="PUT" name="method" onChange={this.handleChangeRadio} value="put"></input></label>
        
         <label for="DELETE">DELETE  <input type="radio" id="DELETE" name="method" onChange={this.handleChangeRadio} value="DELETE"></input></label>
          </form>
          <div>
          <span>{this.state.method} </span>
          <span>{this.state.url} </span>
  
          </div>
         
        </main>
      );
    }
  }



export default Main;