import Alert from "react-bootstrap/Alert";

function Welcome(props) {
  return (
    <Alert variant="success" className="m-5">
      <Alert.Heading>Welcome to EpiBooks</Alert.Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam recusandae saepe veritatis reprehenderit
        accusantium culpa laudantium magnam debitis, maiores mollitia cumque blanditiis velit! Quia est debitis at
        numquam distinctio?
      </p>
    </Alert>
  );
}
export default Welcome;
