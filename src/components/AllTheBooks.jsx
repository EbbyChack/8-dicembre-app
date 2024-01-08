import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AllTheBooks(props) {
  return (
    <>
      <h2 className="mt-5 mb-3 p-3 text-decoration-underline"><b>{(props.genre[0].category).toUpperCase()}</b></h2>
      <Row className="g-5">
        {props.genre.map((book, index) => (
          <Col xs="6" md="4" lg="3" key={`book-${index}`}>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} style={{ objectFit: "cover" }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="bg-dark text-light rounded-5">
                  <b> {book.price}$</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllTheBooks;
