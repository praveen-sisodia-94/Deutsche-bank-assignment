import React from 'react';
import './App.css';
import PersonList from './components/employees/index';
import AddEmployee from './components/employees/addEmployee';
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

  
  // openForm() {
  //   document.getElementById("addForm").style.display = "block";
  //   console.log('----------',document.getElementById("addForm"));
  // }
  
  //   closeForm() {
  //   document.getElementById("addForm").style.display = "none";
  // }
  
  closeAddPopup = () => {
    this.setState({
      showAdd: false,
      showPopup: false
    });
  }


  render() {
    return (
      <div className="App">
        <h3>DB assignment</h3>
        <button className="link" onClick={this.openAddPopup}><u>Add New Employee</u></button>
        {this.state.showAdd && <AddEmployee valueAddedCallback={this.closeAddPopup} />}
        <PersonList />
      </div>
    );
  }
}
export default App;
