import { screen, fireEvent ,waitFor} from '@testing-library/react';
import App from '../App';
import Form  from '../Form';
import Results from '../Results';


import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// import Hello from "./hello";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<App />, container);
  });
  // console.log(container)
  expect(container.querySelector('[id="bayan"]').textContent).toBe("RESTy");
  expect(container.querySelector('[for="GET"]').textContent).toBe("GET");
  expect(container.querySelector('[for="POST"]').textContent).toBe("POST ");
  expect(container.querySelector('[for="PUT"]').textContent).toBe("PUT ");



  // act(() => {
  //   render(<Hello name="Jenny" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Jenny!");

  // act(() => {
  //   render(<Hello name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Margaret!");
});

test('renders learn react link', () => {
  // render(<Form />);
  const onChange = jest.fn();
  act(() => {
    const results = { lat: 0, long: 0 };
    render(<Form  onChange={onChange} title={'Get Star Wars People'} handler={results} num={0}  />, container);
  });
  // console.log(container)
  // expect(container.querySelector('[id="bayan"]').textContent).toBe("RESTy");
  expect(container.querySelector('[for="GET"]').textContent).toBe("GET");
  expect(container.querySelector('[for="POST"]').textContent).toBe("POST ");
  expect(container.querySelector('[data-testid="button"]').textContent).toBe("GO!  ");

  // get ahold of the button element, and trigger some clicks on it
  // const button = document.querySelector('[data-testid="button"]');
  // expect(button.innerHTML).toBe("Turn on");
  // act(() => {
  //   button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  // });

  // expect(onChange).toHaveBeenCalledTimes(0);
  // expect(button.innerHTML).toBe("Turn off");

});

// test('should render the list', () => {
//   const results1 = {count:3,results:['name'],header:{m:'bayan'}}
//   render(<Results count={results1.count} results={results1.results} header={results1.header} />);
//   console.log(screen.getAllByRole('pitems'))
//   const items = screen.getAllByRole('pitems');
//   expect(items).toHaveLength(3);
// });

test('work as expected', async() => {
  render(<App />);
  // screen.debug();
  const button = screen.getByTestId('button');
  fireEvent.submit(button, { target: { url: { value: 'https://jsonplaceholder.typicode.com/users' }, method: { value: 'GET' } } });
  // console.log( expect(screen.getByTestId('output')))
  const results = await waitFor(() => screen.getByTestId('output'));
  expect(results).toBeCalled();
});