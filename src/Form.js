import './Form.scss';
import React from 'react';
import { If, Then, Else } from './if';
let superagent = require('superagent');

class Form extends React.Component {
	constructor(props) {
		console.log('props', props);
		super(props);

		this.state = { url: 'url', method: 'GET', body: [], isFeach: false };
	}

	handleChange = (e) => {
		console.log('hi body', e.target.value);
		console.log('hi', this.state);
		// this.setState({ url: e.target.value });

		console.log('helloooooo', this.state);
	};

	handleChangeMehod = (e) => {
		// console.log('hi body', e.target.value);
		this.setState({ body: e.target.value });

		console.log('helloooooo', this.state);
	};

	handleChangeRadio = (e) => {
		console.log('hi', this.state);
		// this.setState({ method: e.target.value });

		console.log('helloooooo', this.state);
	};
	// if we dont want to use props here we can have it destructed directly {title,handler}
	handleSubmit = async (e) => {
		console.log('hi bodymethod', e.target.url.value);
		e.preventDefault();
		this.setState({ method: e.target.method.value });
		this.setState({ url: e.target.url.value });

		this.setState({ isFeach: true });

		switch (await this.state.method) {
			case 'GET':
				superagent
					.get(await `${this.state.url}`)
					.then((data) => {
						console.log('ddd', data);
						// var choosenBranch = JSON.parse(localStorage.getItem("choosenBranch"))
						// var product = choosenBranch.products
						this.setState({ isFeach: false });

						let total = { url: `${this.state.url}`, method: `${this.state.method}`, data: data.body };
						let history;
						if (localStorage.getItem('history')) {
							history = JSON.parse(localStorage.getItem('history'));
						} else {
							history = [];
						}
						let exiest = false;
						history.forEach((word) => {
							console.log('data', word);
							if (word.url === total.url && word.method === total.method) {
								exiest = true;
							}
						});
						if (exiest) {
							this.props.handler(data.body.count, data.body, data.header, []);
						} else {
							history.push(total);
							localStorage.setItem('history', JSON.stringify(history));

							this.props.handler(data.body.count, data.body, data.header, []);
						}
					})
					.catch((err) => {
						this.setState({ isFeatching: false });
						console.log(err.message);
						this.props.errorHandler(err.message);
					});
				break;
			case 'POST':
				this.props.handlerMethod(this.state.body);
				break;
			case 'PUT':
				let total = { url: `${this.state.url}`, method: `${this.state.method}`, data: this.state.body };
				let history1;
				if (localStorage.getItem('history1')) {
					history1 = JSON.parse(localStorage.getItem('history1'));
				} else {
					history1 = [];
				}
				let exiest = false;
				history1.forEach((word) => {
					console.log('data', word);
					if (word.url === total.url && word.method === total.method) {
						exiest = true;
					}
				});
				if (exiest) {
					this.props.handlerMethod(this.state.body);
				} else {
					history1.push(total);
					localStorage.setItem('history1', JSON.stringify(history1));

					this.props.handlerMethod(this.state.body);
				}

				break;
			case 'DELETE':
				let total1 = { url: `${this.state.url}`, method: `${this.state.method}`, data: this.state.body };
				let history2;
				if (localStorage.getItem('history1')) {
					history2 = JSON.parse(localStorage.getItem('history1'));
				} else {
					history2 = [];
				}
				let exiest1 = false;
				history2.forEach((word) => {
					console.log('data', word);
					if (word.url === total1.url && word.method === total1.method) {
						exiest = true;
					}
				});
				if (exiest1) {
					this.props.handlerMethod(this.state.body);
				} else {
					history2.push(total1);
					localStorage.setItem('history1', JSON.stringify(history2));

					this.props.handlerMethod(this.state.body);
				}

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
	componentDidMount() {
		if (this.props.user !== undefined) {
			const url34 = document.getElementById('url');
			console.log('doc', url34);
			url34.value = this.props.user.url;
			console.log('cc', `${this.props.user.method}`);
			const radiobtn = document.getElementById(`${this.props.user.method}`);
			radiobtn.checked = true;
		}
	}
	render() {
		return (
			<main>
				<form onSubmit={this.handleSubmit}>
					<label for="fname">
						URL:<input type="text" id="url" name="url" onChange={this.handleChange} />
					</label>
					<br />
					<br />
					<label for="fname">
						<input type="text" name="body" height="100" width="50" onChange={this.handleChangeMehod} />
					</label>
					<label for="GET">
						GET<input
							type="radio"
							id="GET"
							defaultChecked
							name="method"
							onChange={this.handleChangeRadio}
							value="GET"
						/>
					</label>

					<label for="POST">
						POST{' '}
						<input type="radio" id="POST" name="method" onChange={this.handleChangeRadio} value="POST" />
					</label>

					<label for="PUT">
						PUT <input type="radio" id="PUT" name="method" onChange={this.handleChangeRadio} value="PUT" />
					</label>

					<label for="DELETE">
						DELETE{' '}
						<input
							type="radio"
							id="DELETE"
							name="method"
							onChange={this.handleChangeRadio}
							value="DELETE"
						/>
					</label>

					<button data-testid="button" type="submit" id="btn">
						GO!
					</button>
					<div>
						<If condition={this.state.isFeach === true}>
							<Then>
								<img
									src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
									alt="lodaing"
									width="50"
									height="50"
								/>
							</Then>
							<Else />
						</If>
					</div>
				</form>
			</main>
		);
	}
}

export default Form;
