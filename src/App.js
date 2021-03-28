import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBeast: {},
      displayModal: false,
      beastData: data
    };
  }

  showModal = (name) => {
    const selectedBeast = data.find(beast => beast.title === name);
    console.log(SelectedBeast);
    this.setState({ selectedBeast, displayModal: true });
  }

  hideModal = () => {
    this.setState({ displayModal: false });
  }
  render() {
    return (
      <div>
        <Header />
        <Main
          showModal={this.showModal}
          beasts={this.state.beastData}
        />

        <SelectedBeast
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast}
        />
        <Footer />
      </div>
    );
  }
}


export default App;
