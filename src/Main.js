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
// {/* <HornedBeasts image_url="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" title="Rhino Family" description="Mother (or father) rhino with two babies" keyword="rhino" /> */ }
