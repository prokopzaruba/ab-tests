import { useState, useContext } from "react";
import { AppContext } from "./App";

interface Props {
  children: string;
  imgSrc: string;
  imgAlt: string;
}

const Article = ({ children, imgSrc, imgAlt }: Props) => {
  const { setTest, test } = useContext(AppContext);

  const [isHovered, setIsHovered] = useState(false);

  const onArticleClick = () => {
    if (!test.active || imgAlt !== "Japan Culture") {
      return;
    }
    setTest((prevState) => ({
      ...prevState,
      clicked: prevState.clicked + 1,
    }));
  };
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onArticleClick()}
      className="article"
    >
      <img className="article-image" src={imgSrc} alt={imgAlt} />
      <h3
        className={isHovered ? "article-heading underline" : "article-heading "}
      >
        {children}
      </h3>
    </div>
  );
};

export default Article;
