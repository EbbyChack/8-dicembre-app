import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Container from "react-bootstrap/esm/Container";

import scifi from "./data/scifi.json";

import BookList from "./components/BookList";
import { Col, Row } from "react-bootstrap";
import CommentAreaNew from "./components/CommentAreaNew";
import { Component } from "react";

class App extends Component {
  state = {
    selected: null
  }

  setCommentState = selectedItem => {
    // selectedItem sarà "First", "Third" ecc....
    this.setState({ selected: selectedItem });
  };
  render() {
    return (
      <div className="App">
        <MyNav brand={"EpiBooks"} link1={"Home"} link2={"Browse"} link3={"About"} />
        <Container>
          <Welcome />
          <Container>
            <Row>
              <Col xs={6}>
                <BookList genre={scifi} selected={this.state.selected} setCommentState={this.setCommentState} />
              </Col>
              <Col xs={6} className="bg-light rounded-5">
                <CommentAreaNew selected={this.state.selected}/>
              </Col>
            </Row>
          </Container>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
