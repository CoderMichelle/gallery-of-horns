import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';
console.log(data);
class Main extends React.Component {
  render() {
    return (
      <CardColumns>

        {data.map(beasts => (
          <HornedBeasts
            image_url={beasts.image_url}
            description={beasts.description}
            keyword={beasts.keyword}
            title={beasts.title}
          />
        ))}

      </CardColumns>
    );

  }
}
export default Main;

