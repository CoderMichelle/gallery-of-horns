import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import CardDeck from 'react-bootstrap/CardDeck';
import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
import './Main.css';
class Main extends React.Component {
  handleFilter = (event) => {
    if (event.target.value === 'All') {
      this.props.handleDropDown(event.target.value);
    } else {
      this.props.handleDropDown(+event.target.value);
    }
  }
  render() {

    return (
      <>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Select the Number of Horns</Form.Label>
            <Form.Control as="select" onChange={this.handleFilter}>
              <option>All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>100</option>
            </Form.Control>
          </Form.Group>
        </Form>
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
      </>
    );

  }
}
export default Main;

