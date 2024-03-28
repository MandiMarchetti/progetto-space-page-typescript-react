import { useEffect, useState } from "react";
import Article from "./Articles";
import { InterfaceArticle } from "../interfaces/InterfaceArticle";
import { InterfaceObject } from "../interfaces/InterfaceArticle";

const FetchComponent = function () {
  const [articles, setArticles] = useState<InterfaceArticle[]>([]);
  const [error, setError] = useState<string>("");

  const fetchArticles = function () {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("problem calling the API");
        }
      })
      .then((data: InterfaceObject) => {
        console.log("DATA", data);
        setArticles(data.results);
      })
      .catch((e: Error) => {
        console.log("ERRORE", e);
        setError("Error to find the article. Please, try again later.");
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>ARTICLE</h2>
      {error && <p>{error}</p>}
      {articles.map((b) => (
        <Article articleDetails={b} key={b.id} />
      ))}
    </div>
  );
};

export default FetchComponent;
