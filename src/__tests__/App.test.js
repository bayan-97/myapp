import { screen, fireEvent , waitFor} from '@testing-library/react';
import App from '../App';
import Form  from '../Form';
import Results from '../Results';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";



let container = null;


it("renders with app", () => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(<App/>, container);
  });
  // console.log(container)
  expect(container.querySelector('[id="bayan"]').textContent).toBe("RESTy");
  expect(container.querySelector('[for="GET"]').textContent).toBe("GET");
  expect(container.querySelector('[for="POST"]').textContent).toBe("POST ");
  expect(container.querySelector('[for="PUT"]').textContent).toBe("PUT ");

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders Form', async() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  const onChange = jest.fn();
  act(() => {
    const results = { lat: 0, long: 0 };
    render(<Form  onChange={onChange} title={'Get Star Wars People'} handler={results} num={0}  />, container);
  });

  expect(container.querySelector('[for="GET"]').textContent).toBe("GET");
  expect(container.querySelector('[for="POST"]').textContent).toBe("POST ");
  unmountComponentAtNode(container);
  container.remove();
  container = null;



});



test('render submit buttom by form file', async() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(<App/>, container);
  });

  const button = screen.getByTestId('button');
  fireEvent.submit(button, { target: { url: { value: 'https://jsonplaceholder.typicode.com/users' }, method: { value: 'GET' } } });
  const results = await waitFor(() => screen.getByTestId('output'));
  expect(results).toBeInTheDocument();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});