import React from 'react';
import { connect } from 'react-redux';


class Tasks extends React.Component {


    closeCallback = () => {
        this.props.valueAddedCallback();
    }

    render() {
        return (
            <div>
                <h3> Following required functionalities are handled : </h3>

                <ol>
                    <li>Show Employees' Records</li>
                    <li>Add New Employee</li>
                </ol>

                <h4>Additional functionalities added : </h4>
                <ol>
                    <li>Search Functionality</li>
                    <li>Customized search [User can filter out the records depending upon different properties <br />(name,age,technology) by choosing it from dropdown. ]</li>
                    <li>Project's self description through this current popup</li>
                    <li>Project's title is customized.</li>
                </ol>

                <input className="cancel-button" type="button" onClick={this.closeCallback} value="Close" />            </div>
        );
    }

}

export default connect()(Tasks);