import { useState, useContext } from "react";
import Article from "./Article";
import { AppContext } from "./App";

const TestForm = () => {
  const { setTest } = useContext(AppContext);

  const [selectedTest, setSelectedTest] = useState("");
  const [color, setColor] = useState("");
  const [style, setStyle] = useState("");
  const [name, setName] = useState("");
  const [articleHeading, setArticleHeading] = useState("");

  const onCreateTest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let change = "";

    if (selectedTest === "Country Button") {
      change = style;
    } else if (selectedTest === "Article Heading") {
      change = articleHeading;
    } else {
      change = color;
    }

    setTest(() => ({
      active: true,
      title: name,
      type: selectedTest,
      change: change,
      users: 0,
      clicked: 0,
    }));
  };

  return (
    <div>
      <form onSubmit={(e) => onCreateTest(e)}>
        <input
          required
          className="test-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          required
          className="test-select"
          defaultValue=""
          onChange={(e) => setSelectedTest(e.target.value)}
        >
          <option value="" disabled>
            Select a test
          </option>
          <option value="Country Button">Country button style</option>
          <option value="Article Heading">Article heading</option>
          <option value="Info Buttons">Info buttons color</option>
        </select>
        <div className="test">
          {selectedTest === "Country Button" && (
            <div>
              <div>
                <select
                  required
                  className="test-style-select"
                  defaultValue=""
                  onChange={(e) => setStyle(e.target.value)}
                >
                  <option value="" disabled>
                    Select styling
                  </option>
                  <option value="bold">Bold</option>
                  <option value="italic">Italic</option>
                  <option value="bold italic">Bold and Italic</option>
                </select>
              </div>
              <div className="versions">
                <div>
                  <h3 className="version-heading">Old Version</h3>
                  <button disabled className="show-info-button">
                    Show info
                  </button>
                </div>
                <div>
                  <h3 className="version-heading">New Version</h3>
                  <button disabled className={`show-info-button ${style}`}>
                    Show info
                  </button>
                </div>
              </div>
            </div>
          )}
          {selectedTest === "Article Heading" && (
            <div>
              <textarea
                required
                className="article-content"
                value={articleHeading}
                onChange={(e) => setArticleHeading(e.target.value)}
              ></textarea>
              <div className="versions">
                <div>
                  <h3 className="version-heading">Old Version</h3>
                  <Article imgSrc="./images/japan.jpg" imgAlt="Japan Culture">
                    Japan's New Year Traditions: Exploring the Cultural Marvels
                    in the Land of the Rising Sun
                  </Article>
                </div>
                <div>
                  <h3 className="version-heading">New Version</h3>
                  <Article imgSrc="./images/japan.jpg" imgAlt="Japan Culture">
                    {articleHeading}
                  </Article>
                </div>
              </div>
            </div>
          )}
          {selectedTest === "Info Buttons" && (
            <div>
              <select
                required
                className="test-style-select"
                defaultValue=""
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="" disabled>
                  Select color
                </option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
              <div className="versions">
                <div>
                  <h3 className="version-heading">Old Version</h3>
                  <div className="button-set">
                    <button
                      className="additional-info-button active-button"
                      disabled
                    >
                      Weather
                    </button>
                    <button className="additional-info-button" disabled>
                      Capital
                    </button>
                    <button className="additional-info-button" disabled>
                      Culture
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="version-heading">New Version</h3>
                  <div className="button-set">
                    <button
                      className="additional-info-button active-button"
                      disabled
                    >
                      Weather
                    </button>
                    <button
                      className={`additional-info-button ${color}`}
                      disabled
                    >
                      Capital
                    </button>
                    <button
                      className={`additional-info-button ${color}`}
                      disabled
                    >
                      Culture
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {selectedTest && <button className="test-button">Start test</button>}
      </form>
    </div>
  );
};

export default TestForm;
