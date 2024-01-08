import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";


// function SingleBook({ book }) {

//   return (

//     <Col xs="6" md="4" lg="3">
//       <Card className="h-100">
//         <Card.Img variant="top" src={book.img} style={{ objectFit: "cover" }} />
//         <Card.Body className="d-flex flex-column justify-content-between">
//           <Card.Title>{book.title}</Card.Title>
//           <Card.Text className="bg-dark text-light rounded-5">
//             <b> {book.price}$</b>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }
// export default SingleBook;

class SingleBook extends Component {
  state = {
    selected: false,
  };

  // handleCardClick = () => {
  //   // Toggle the 'selected' state when the card is clicked
  //   this.setState((prevState) => ({
  //     selected: !prevState.selected,
  //   }));
  // };

  handleCardClick = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Col xs="6" md="4" lg="3">
        <Card className={`h-100 ${this.state.selected ? "border-danger border-2" : ""}`} onClick={this.handleCardClick}>
          <Card.Img variant="top" src={this.props.book.img} style={{ objectFit: "cover" }} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text className="bg-dark text-light rounded-5">
              <b> {this.props.book.price}$</b>
            </Card.Text>
            {this.state.selected && <CommentArea selected={this.state.selected} elementId={this.props.book.asin} />}

          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
