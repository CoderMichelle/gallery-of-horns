
import React from 'react';

import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }
  imageClicked = () => {
    // console.log(this.state.timesClicked);

    this.setState({ timesClicked: this.state.timesClicked + 1 });

  }
  openModal = () => {
    this.props.showModal(this.props.title);

  }
  render() {
    return (
      <Card style={{ width: '25rem' }} onClick={this.imageClicked}>
        <Card.Img onClick={this.openModal} variant="top" src={this.props.image_url} style={{ width: '100%' }} alt={this.props.keyword} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>❤️ {this.state.timesClicked}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
export default HornedBeasts;

/* <button onClick={this.imageClicked} ><img src={this.props.image_url} alt={this.props.description} title={this.props.title} /></button> */
