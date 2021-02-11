import EmployeeData from '../initialData'


const initialState = {
    employees: EmployeeData
}


// reducer --> which will take the action and connect to store for various operations
const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;

        case 'ADD_EMPLOYEE':
            return {
                employees: state.employees.concat(action.employee)
            }
        case 'SET_EMPLOYEES_DATA':
            return {
                employees: action.empList
            }
        case 'GET_ALL_EMPLOYEE':
            return state; 
    }
}

// Actual method connected with backend which will fetch me the list of all records present in table for employees
export const getEmployees = () => async (dispatch, getState) => {
    const empList = await fetch("http://192.168.43.113:8080/getEmployees", { mode: 'no-cors' }).then(res => res.text());
    dispatch({
        type: 'SET_EMPLOYEES_DATA',
        empList: empList
    });
}

//dummy method which is fetching values from store
export const addNewEmployee = (employee) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_EMPLOYEE',
        employee: employee
    });
}


// Actual method connected with backend which will add an employee 
export const addEmployee = (employee) => async (dispatch, getState) => {
    const empList = await fetch('http://192.168.43.113:8080/addEmployee',
        {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(employee),
            headers: { 'Content-Type': 'application/json' },

        }).then(res => {

            if (res.ok) {
                dispatch({
                    type: 'ADD_EMPLOYEE',
                    employee: res.text()
                });
            }
            else {
                alert("Something went wrong ||");
            }


        })
}

export default employeeReducer;