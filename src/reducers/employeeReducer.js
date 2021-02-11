const initialState= {
    employees : []
}

const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        default : return state;

        case 'ADD_EMPLOYEE' :
            return {
                employees : state.employees.concat(action.employee)
            }
            case 'SET_EMPLOYEES_DATA' : 
            return {
                employees : action.empList
            }

    }
}

export const getEmployees = () =>async (dispatch, getState) => {
    // const employees = getState().employees;
   const empList = await fetch("http://localhost:8080/getEmployees", {mode: 'no-cors'}).then(res => res.text());
   dispatch({
    type: 'SET_EMPLOYEES_DATA',
    empList: empList
});
}

export const addEmployee = (employee) => async (dispatch, getState) => {
    // const employees = getState().employees;
   const empList = await fetch('http://192.168.43.113:8080/addEmployee',
    {
    mode:'no-cors',
    method : 'POST',
    body : JSON.stringify(employee),
    headers : {'Content-type': 'application/json'},
        
}).then(res => {

    console.log('response is---------', res);
    if(res.ok) {
        dispatch({
            type: 'ADD_EMPLOYEE',
            employee: res.text()
        });
    }
    else{
        alert("Something went wrong ||");
    }
    
   
})
}

export default employeeReducer;