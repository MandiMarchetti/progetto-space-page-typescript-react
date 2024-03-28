import Card from "react-bootstrap/Card";
import { InterfaceArticle } from "../interfaces/InterfaceArticle";
import { Col, Container, Row } from "react-bootstrap";

interface ArticleProps {
  articleDetails: InterfaceArticle;
}

const Articles = function (props: ArticleProps) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="my-2">
            <Card.Img src={props.articleDetails.image_url} />
            <Card.Body>
              <Card.Title>{props.articleDetails.title}</Card.Title>
              <Card.Title>{props.articleDetails.news_site}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Articles;
