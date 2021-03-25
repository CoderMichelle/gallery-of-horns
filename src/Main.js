import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json';
console.log(data);
class Main extends React.Component {
  render() {
    return (
      <div>

        {data.map(beasts => (
          <HornedBeasts
            image_url={beasts.image_url}
            description={beasts.description}
            keyword={beasts.keyword}
            title={beasts.title}
          />
        ))}

      </div>
    );

  }
}
export default Main;

