import React from 'react';
import { connect } from 'react-redux';
import constants from '../../helper/constants';
import Modal from 'react-modal';
import Tasks from './tasks'
// import {getEmployees} from '../../reducers/employeeReducer'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-70%, -50%)',
        borderRadius: '30px',
        background: '#acc2d4',
        border: '3px solid rgb(113 99 99)'
    }
};

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValues: this.props.employees,
            selectedFilter: 'name',
            showProjectFunctionalities: false
        }

    }

    componentDidMount() {
        //In order to get real time data from API, will fire this action to get data from APIs as soon as the component is mounted
        // this.props.dispatch(getEmployees());
    }

    componentDidUpdate(prevProps) {
        if (prevProps.employees.length !== this.props.employees.length) {
            this.setState({
                initialValues: this.props.employees
            });
        }
    }



    filterByName = (e) => {
        let allEmployees = this.props.employees;
        let filteredEmp = allEmployees.filter(employee => {
            return this.state.selectedFilter === 'age' ?
                employee.age.toString().toLowerCase().includes(e.target.value.toLowerCase()) :
                this.state.selectedFilter === 'technology' ?
                    employee.technology.toString().toLowerCase().includes(e.target.value.toLowerCase()) :
                    employee.name.toString().toLowerCase().includes(e.target.value.toLowerCase())
        });
        this.setState({ initialValues: filteredEmp });

    }
    setFilterType = (e) => {
        this.setState({ selectedFilter: e.target.value })
    }
    showProjectFunctionalities = () => {
        this.setState({
            showProjectFunctionalities: true
        });
    }

    closeAddPopup = () => {
        this.setState({
            showProjectFunctionalities: false
        });
    }
    render() {
        return (
            <div>
                <h1>{constants.EMPLOYEE_CATALOGUE}</h1>
                <div><span><b>Search Emp by :</b>  <select name="seachType" id="filters" onChange={this.setFilterType}>
                    <option value="name">Name</option>
                    <option value="technology">Technology</option>
                    <option value="age">Age</option>
                </select>
                </span>
                    <span className="search-box"><input type="text" placeholder="Enter text here..." onChange={this.filterByName} />
                    </span>
                </div>
                <div className="dev-info" onClick={this.showProjectFunctionalities}>Click here to view all implemented functionalities</div>

                {this.state.showProjectFunctionalities &&
                    <Modal isOpen={this.state.showProjectFunctionalities} style={customStyles}>
                        <Tasks valueAddedCallback={this.closeAddPopup} />
                    </Modal>}

                <div className="grid-container">
                    {this.state.initialValues.map((employee, index) => <div>
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
        employees: state.employees
    }
}
export default connect(mapStateToProps)(EmployeeList);