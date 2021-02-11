import React from 'react';
import { connect } from 'react-redux';
import {getEmployees} from '../../reducers/employeeReducer'

class EmployeeList extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     }

}
componentDidMount () {
   // this.props.dispatch(getEmployees());
}
    render() {
        return (
            <div>
                <h3>Employee Catalogue</h3>
                <div className="grid-container">
                    {this.props.employees.map((employee , index) => <div> 
                        <div><b>Name :</b> {employee.name} </div>
                        <div><b>Tech : </b>{employee.technology} </div>
                        <div><b>Age : </b>{employee.age} </div>
                         </div>)}
                </div>
            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        employees : state.employees
    }
}
export default connect(mapStateToProps)(EmployeeList);