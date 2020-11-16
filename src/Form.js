
import './Form.scss';
import React from 'react';
let superagent=require('superagent')

 class Form extends React.Component{
    constructor(props) {
        console.log("props",props)
        super(props);

        this.state = { url: 'url', method: 'GET' };

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
    // if we dont want to use props here we can have it destructed directly {title,handler}
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("url",this.state.url);
        // let method1=`${this.state.method}`
        switch(this.state.method) {
            case 'GET':
          superagent.get(`${this.state.url}`).then(data=>{
            console.log("ddd",data)
            this.props.handler(data.body.count,data.body,data.header);
          })
              break;
            case 'POST':
         superagent.post(`${this.state.url}`).then(data=>console.log("ddd",data))
              break;
        case 'PUT':
        superagent.put(`${this.state.url}`).then(data=>console.log("ddd",data))
            break;
        case 'DELETE':
        superagent.delete(`${this.state.url}`).then(data=>console.log("ddd",data))
         break;
            default:
              // code block
          }
       
        // fetch(`${this.state.url}`, {
        //     method: `${this.state.method}`, 
        //     headers: {
        //       'Content-Type': 'application/json',
        //     }
        //   })
        //   .then(response =>{
        //     console.log("data",response)
        //       return  response.json()})
        //   .then((data) => {
              
        //    console.log("data",data)
        //      this.props.handler(data.count,data);
               
        //  });
    };
   render(){
    return (
        <main>
       <form onSubmit={this.handleSubmit}>
               <label for="fname">URL:<input type="text" onChange={this.handleChange}></input></label>
              <br></br>
                <br></br>
             <label for="GET">GET<input  type="radio" id="GET" name="method" onChange={this.handleChangeRadio} value="GET"></input></label>
               
              <label for="POST">POST <input type="radio" id="POST" name="method" onChange={this.handleChangeRadio} value="POST"></input></label>
               
            <label for="PUT">PUT <input type="radio" id="PUT" name="method" onChange={this.handleChangeRadio} value="PUT"></input></label>
            
          <label for="DELETE">DELETE  <input type="radio" id="DELETE" name="method" onChange={this.handleChangeRadio} value="DELETE"></input></label>
      
          <button data-testid="button" type="submit" onClick={this.handleClick}>GO! </button>
   
      </form >
      </main>
      )}
}

export default Form;


// class Main extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = { url: 'url',method:'GET' };

//     }

//     handleChange = (e) => {
//       console.log('hi', this.state);
//       this.setState({ url: e.target.value });

//       console.log('helloooooo', this.state);
//     };
//     handleChangeRadio = (e) => {
//       console.log('hi', this.state);
//       this.setState({ method: e.target.value });

//       console.log('helloooooo', this.state);
//     };
//     handleClick = (e) => {
//         const url = this.state.url
//         const method = this.state.method
//   console.log(url,method)
//       this.setState({url,method});
//       console.log('hello');
//       e.preventDefault();
//     };
//     render() {
//       return (
//         <main>
//           <form>
//           <label for="fname">URL:<input type="text" onChange={this.handleChange} /><button type="submit" onClick={this.handleClick}>GO!</button>
//           </label>
//           <br></br>
//           <br></br>
//           <label for="GET">GET<input type="radio" id="GET" name="method" onChange={this.handleChangeRadio} value="GET"></input></label>

//            <label for="POST">POST <input type="radio" id="POST" name="method" onChange={this.handleChangeRadio} value="POST"></input></label>

//          <label for="PUT">PUT <input type="radio" id="PUT" name="method" onChange={this.handleChangeRadio} value="put"></input></label>

//          <label for="DELETE">DELETE  <input type="radio" id="DELETE" name="method" onChange={this.handleChangeRadio} value="DELETE"></input></label>
//           </form>
//           <div>
//           <span>{this.state.method} </span>
//           <span>{this.state.url} </span>

//           </div>

//         </main>
//       );
//     }
//   }



// export default Main;