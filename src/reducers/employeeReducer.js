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

    }
}

export default employeeReducer;