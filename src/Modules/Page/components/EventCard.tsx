import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EventCard() {
  return (
    <Card style={{ width: "320px" }}>
      <Card.Img
        variant="top"
        style={{height:220,width:320}}
        src="https://www.acenet.edu/PublishingImages/Interior-Page-Heroes/2018ACE-1045.JPG?RenditionID=10"
      ></Card.Img>
      <Badge bg="secondary" style={{position:"absolute",top:"20px"}}>Price</Badge>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
