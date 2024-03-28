import { useEffect, useState } from "react";
import Article from "./Articles";
import { InterfaceArticle } from "../interfaces/InterfaceArticle";

const FetchComponent = function () {
  const [articles, setArticles] = useState<InterfaceArticle[]>([]);

  const fetchArticles = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("problema nella chiamata API");
        }
      })
      .then((arrayOfArticles: InterfaceArticle[]) => {
        console.log("DATI", arrayOfArticles);
        setArticles(arrayOfArticles);
      })
      .catch((e) => console.log("ERRORE", e));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>ARTICLE</h2>
      {articles.map((art) => (
        <Article articleDetails={art} key={art.id} />
      ))}
    </div>
  );
};

export default FetchComponent;
