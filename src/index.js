import React from 'react';
import Header from './header.js';
import Main from './main.js';
import footer from './footer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>

        <main>
          <Main />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}




export default App;
