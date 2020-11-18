import React from 'react';
import { If, Then, Else } from './if';
import './results.scss';

import ReactJson from 'react-json-view';
export default function Results({ count, results, header, body }) {
	// console.log(body.length, results);

	return (
		<div id="results">
			<If condition={body.length !== 0 || body.length !== 0}>
				<Then>
					<p data-testid="output">{body}</p>
				</Then>
				<Else>
					<span>
						response:<ReactJson name="response" src={results} theme="monokai" />
					</span>
				</Else>
			</If>
		</div>
	);
}
