import Card from "react-bootstrap/Card";
import { InterfaceArticle } from "../interfaces/InterfaceArticle";

interface ArticleProps {
  articleDetails: InterfaceArticle;
}

const Articles = function (props: ArticleProps) {
  return (
    <Card className="my-2">
      <Card.Img src={props.articleDetails.image_url} />
      <Card.Body>
        <Card.Title>{props.articleDetails.title}</Card.Title>
        <Card.Title>{props.articleDetails.news_site}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Articles;
