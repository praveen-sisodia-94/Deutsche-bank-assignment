import React from 'react';
import { connect } from 'react-redux';
import { addNewEmployee } from '../../reducers/employeeReducer'
import constants from '../../helper/constants';


class AddEmployee extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pincode: '',
            name: '',
            company: '',
            technology: '',
            age: '',
            id: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addNewEmployee(this.state));
        this.props.valueAddedCallback();
    }

    closeCallback = (e) => {
        this.props.valueAddedCallback();
    }

    handleChangeForInt = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        });
    }
    handleInputChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <div>
                <h3>{constants.ADD_EMPLOYEE}</h3>
                <form className="form-main" onSubmit={this.handleSubmit} >
                    <h4>{constants.ALL_FIELD_MANDATORY_MESSAGE}</h4>
                    <input className="inputs" type='number' required name="id" placeholder='ID' value={this.state.id} onChange={this.handleChangeForInt} />
                    <br />
                    <input className="inputs" type='text' required name="name" placeholder='Full Name' value={this.state.name} onChange={this.handleInputChange} />
                    <br />
                    <input className="inputs" type='number' required name="age" placeholder='Age' value={this.state.age} onChange={this.handleChangeForInt} />
                    <br />
                    <input className="inputs" type='text' required name="company" placeholder='Current Company' value={this.state.company} onChange={this.handleInputChange} />
                    <br />
                    <input className="inputs" type='text' required name="technology" placeholder='Technology' value={this.state.technology} onChange={this.handleInputChange} />
                    <br />
                    <input className="inputs" type='number' required name="pincode" placeholder='PinCode' value={this.state.pincode} onChange={this.handleChangeForInt} />
                    <br />
                    <br />
                    <div className="btns">
                        <input type="submit" value="Save" />
                        <input className="cancel-button" type="button" onClick={this.closeCallback} value="Cancel" />
                    </div>
                </form>

            </div>
        );
    }

}

export default connect()(AddEmployee);