import Row from "react-bootstrap/Row";
import { Form, FormControl, Button } from "react-bootstrap";

import SingleBook from "../components/SingleBook";
import { Component } from "react";

// function BookList(props) {

//   return (
//     <>
//     <Form className="d-flex m-5">
//       <FormControl
//         type="search"
//         placeholder="Search"
//         className="mr-2"
//         aria-label="Search"

//       />
//       <Button variant="outline-success">Search</Button>
//     </Form>

//     <Row className="g-5">
//       {props.genre.map((book,index) => (
//         <SingleBook key={`book${index}`} book={book} />
//       ))}
//     </Row>
//     </>
//   );
// }

// export default BookList;

class BookList extends Component {
  state = {
    searchTerm: "",
    selected: null
  };
  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  setCommentState = selectedItem => {
    // selectedItem sarà "First", "Third" ecc....
    this.setState({ selected: selectedItem });
  };

  render() {
    return (
      <>
        <FormControl
          type="search"
          placeholder="Search"
          className="mb-2 w-auto"
          aria-label="Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />

        <Row className="g-5">
          {this.props.genre.filter(book => book.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map((book, index) => (
            <SingleBook key={`book${index}`} book={book} selected={this.state.selected} setCommentState={this.setCommentState} />
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
