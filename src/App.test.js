import { render,fireEvent, screen, cleanup } from '@testing-library/react';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';

afterEach(cleanup);

const initialEmployees=
  [];

  function reducer(state=initialEmployees , action) {
    switch (action.type) {
      case  'GET_ALL_EMPLOYEE' : return {...state.employees};
      default : return state;
    }
  }


function renderWithRedux(Component, 
  {initialState, store= createStore(reducer,initialState)} = {}){
    return {
    ...render(<Provider store = {store}>{Component}</Provider>)
    };
  }


  
it("initially the list is blank", ()=>{
  const {getByText,getByTestId, getById} = renderWithRedux(<App />);
  // const linkElement = screen.getByTestId("employee-list");
  // expect(linkElement).toBeInTheDocument();
  expect(getByTestId("employee-list")).toHaveTextContent('')

});



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
