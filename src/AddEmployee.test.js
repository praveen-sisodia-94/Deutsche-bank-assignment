import { render,fireEvent, screen, cleanup } from '@testing-library/react';
import AddEmployee from '../src/components/employees/addEmployee';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';

afterEach(cleanup);

it('should not call AddEmp if length of text is 0', () => {
  const mockAddEMP = jest.fn()
  render(<AddEmployee valueAddedCallback={mockAddEMP} />)

  fireEvent.change(screen.getByPlaceholderText(/Name/i), {
    target: { value: '' }
  })
  expect(mockAddTodo).toHaveBeenCalledTimes(0)
})

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

it("Placeholders are shown properly.", ()=>{
  const {getByText,getByTestId, getById} = renderWithRedux(<AddEmployee />);
  // const linkElement = screen.getByTestId("employee-list");
  // expect(linkElement).toBeInTheDocument();
  expect(getByText("emp-form")).toHaveTextContent('Add')

});

