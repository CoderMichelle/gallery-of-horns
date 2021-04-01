import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedImgObject from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImgObject: {},
      displayModal: false,
      beastData: data
    };
  }

  showModal = (name) => {
    const selectedImgObject = data.find(imgObject => imgObject.title === name);
    console.log(SelectedImgObject);
    this.setState({ selectedImgObject, displayModal: true });
  }

  hideModal = () => {
    this.setState({ displayModal: false });
  }
  handleDropDown = (selection) => {
    if (selection === 'All') {
      this.setState({ beastData: data });
    } else {
      const selectionArr = data.filter(hornObj => hornObj.horns === +selection);
      this.setState({ beastData: selectionArr });
    }
  }
  render() {
    return (
      <div>

        <Header />
        <Main
          showModal={this.showModal}
          beasts={this.state.beastData}
          handleDropDown={this.handleDropDown}
        />

        <SelectedImgObject
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedImgObject={this.state.selectedImgObject}
        />
        <Footer />
      </div>
    );
  }
}


export default App;
