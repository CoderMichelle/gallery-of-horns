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
      <Container fluid >
        <Row>
          <Col onClick={this.imageClicked}>
            <h2>{this.props.title}</h2>
            <img src={this.props.image_url} alt={this.props.description} title={this.props.title} />
            <h3>&#9829; {this.state.timesClicked}</h3>
            <p>{this.props.description}</p>
          </Col>
        </Row>
      </Container>
    );

  }
}
export default HornedBeasts;

{/* <button onClick={this.imageClicked} ><img src={this.props.image_url} alt={this.props.description} title={this.props.title} /></button> */ }
