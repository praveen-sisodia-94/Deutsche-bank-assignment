import React from 'react';
import './App.css';
import EmployeeList from './components/employees/index';
import AddEmployee from './components/employees/addEmployee';
import Modal from 'react-modal';
import companyLogo from '../src/resources/Deutsche-Bank-Logo.jpg'
import Constants from './helper/constants'
import { Helmet } from 'react-helmet'


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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false
    }
  }

  openAddPopup = () => {
    this.setState({
      showAdd: true
    });
  }


  closeAddPopup = () => {
    this.setState({
      showAdd: false,
      showPopup: false
    });
  }


  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Praveen's Assignment</title>
        </Helmet>
        <div className="dev-info"><b>{Constants.DEVELOPER_INFO}</b><br /><a href="https://www.linkedin.com/in/praveentcs/">View Profile</a></div>
        <div>
          <img src={companyLogo} alt={Constants.DB_LOGO} />
          <div>
            <button className="link" onClick={this.openAddPopup}>{Constants.ADD_BUTTON_TEXT}</button>

          </div>
        </div>

        {this.state.showAdd &&
          <Modal isOpen={this.state.showAdd} style={customStyles}>
            <AddEmployee valueAddedCallback={this.closeAddPopup} />
          </Modal>}
        <EmployeeList />
      </div>
    );
  }
}
export default App;
