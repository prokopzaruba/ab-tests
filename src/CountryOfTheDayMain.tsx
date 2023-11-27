import { useState } from "react";

const CountryOfTheDayMain = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div className="country-of-the-day-main">
      <div className="flag-with-heading">
        <img src="./images/flag.png" alt="Norway Flag" className="flag" />
        <h2 className="country-heading">Norway</h2>
      </div>
      <div className="country-description">
        <p className="country-paragraph">
          Nestled in northern Europe, Norway's stunning landscapes are defined
          by majestic fjords, snow-capped mountains, and serene lakes, creating
          a haven for nature enthusiasts. The country, rooted in Viking history,
          strikes a balance between tradition and progress, evident in its
          vibrant capital, Oslo, and a globally renowned education system
          fostering inclusivity.
        </p>
        <p className="country-paragraph">
          Economically, Norway's wealth stems from well-managed oil and gas
          resources. Yet, its commitment to environmental sustainability is
          unmistakable, with initiatives diversifying the economy and investing
          in renewable energy sources, showcasing a responsible global approach.{" "}
          {showText === false && (
            <span className="read-more" onClick={() => setShowText(true)}>
              read more
            </span>
          )}
        </p>
        {showText === true && (
          <div>
            <p>
              Culturally rich, Norway embraces a blend of traditional and
              contemporary influences. The haunting melodies of the Hardanger
              fiddle echo the nation's identity, while a thriving arts scene,
              featuring renowned artists and writers, adds to the cultural
              tapestry.
            </p>
            <p>
              In essence, Norway unfolds as a captivating destination where
              natural wonders, a deep cultural heritage, and forward-thinking
              values intersect, creating a story that continues to evolve.{" "}
              <span className="read-more" onClick={() => setShowText(false)}>
                hide
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryOfTheDayMain;
