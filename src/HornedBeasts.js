import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }

  imageClicked = () => {
    console.log(this.state.timesClicked);
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>{this.props.title}</h2>
            <button onClick={this.imageClicked} ><img src={this.props.image_url} alt={this.props.description} title={this.props.title} />&#9829;</button>
            <p>{this.props.description}</p>
          </Col>
        </Row>
      </Container>
    );

  }
}
export default HornedBeasts;
