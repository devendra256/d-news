import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem";

export const NewsBoard = (props) => {

  const [article, setArticle] = useState([]);

  useEffect(() => {
    const category = props.category;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

    fetch(URL).then(response => response.json()).then(data => setArticle(data.articles));
  }, [props.category]);

  return (
    <div>
      <h3 className="text-center">Latest <span className="badge  bg-danger">News</span></h3>
      {
        article.map((news, index) => {
          return <NewsItem key={index} title={news.title} description={news.description} author={news.author} imgUrl={news.urlToImage} url={news.url} />
        })
      }
    </div>
  )
}
