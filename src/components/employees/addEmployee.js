import React from 'react';
import { connect } from 'react-redux';
// import ValidationMapper from '../../helper/ValidationMapper';
class AddEmployee  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pincode: '',
            name: '',
            company: '',
            technology : '',
            age : ''
        }
    }


    // checkValidationMessage = () => {

    //     let idCheck = ValidationMapper.getValidatioNFailMessageForRequiredAndSQLInjection(this.state.id, 'ID');
    //     let nameCheck = ValidationMapper.getValidatioNFailMessageForRequiredAndSQLInjection(this.state.id, 'Name');
    //     let ratingCheck = ValidationMapper.getValidatioNFailMessageForRequiredAndSQLInjection(this.state.id, 'Rating')
    //     if (idCheck) {
    //         return idCheck;
    //     }
    //     else if (nameCheck) {
    //         return nameCheck;
    //     }
    //     else if (ratingCheck) {
    //         return ratingCheck;
    //     }
    //     else
    //         return 'NO_ERROR';
    // }


    handleSubmit = (e) => {
        e.preventDefault();
            this.props.dispatch({
                type: 'ADD_EMPLOYEE',
                employee: this.state
            });
            this.props.valueAddedCallback();
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    
    render() {
        return (
            <div>
                <h3>Add Employee</h3>

                <form onSubmit={this.handleSubmit} >
                    <input type='text' required name="name" placeholder='Name' value={this.state.name} onChange={this.handleInputChange} />
                    <br />
                    <input type='text' required name="age" placeholder='Age' value={this.state.age} onChange={this.handleInputChange} />
                    <br />
                    <input type='text' required name="company" placeholder='Current Company' value={this.state.company} onChange={this.handleInputChange} />
                    <br />
                    <input type='text' required name="technology" placeholder='Technology' value={this.state.technology} onChange={this.handleInputChange} />
                    <br />
                    <input type='text' required name="pincode" placeholder='PinCode' value={this.state.pincode} onChange={this.handleInputChange} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }

}

export default connect()(AddEmployee);