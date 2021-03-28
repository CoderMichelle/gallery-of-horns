import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import CardDeck from 'react-bootstrap/CardDeck';

class Main extends React.Component {
  render() {
    console.log('HURRAY HERE IT IS', this.props.beasts);
    return (
      <CardDeck>
        {this.props.beasts.map((thisBeast, index) => {

          return (
            <div key={index}>
              <HornedBeasts
                showModal={this.props.showModal}
                image_url={thisBeast.image_url}
                description={thisBeast.description}
                title={thisBeast.title}
              />
            </div>
          );
        })}

      </CardDeck>
    );

  }
}
export default Main;

