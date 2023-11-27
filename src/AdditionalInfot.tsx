import { useState, useContext } from "react";
import { AppContext } from "./App";

const AdditionalInfo = () => {
  const { test, setTest } = useContext(AppContext);

  const [activeButton, setActiveButton] = useState("weather");

  return (
    <div className="additional-info">
      <h3 className="additional-info-heading">Additional Info</h3>
      <div>
        {test.active && test.type === "Info Buttons" ? (
          <div
            className="button-set"
            onClick={() =>
              setTest((prevState) => ({
                ...prevState,
                clicked: prevState.clicked + 1,
              }))
            }
          >
            <button
              className={
                activeButton === "weather"
                  ? "additional-info-button active-button"
                  : `additional-info-button ${test.change}`
              }
              onClick={() => setActiveButton("weather")}
            >
              Weather
            </button>
            <button
              className={
                activeButton === "capital"
                  ? "additional-info-button active-button"
                  : `additional-info-button ${test.change}`
              }
              onClick={() => setActiveButton("capital")}
            >
              Capital
            </button>
            <button
              className={
                activeButton === "culture"
                  ? "additional-info-button active-button"
                  : `additional-info-button ${test.change}`
              }
              onClick={() => setActiveButton("culture")}
            >
              Culture
            </button>
          </div>
        ) : (
          <div className="button-set">
            <button
              className={
                activeButton === "weather"
                  ? "additional-info-button active-button"
                  : "additional-info-button"
              }
              onClick={() => setActiveButton("weather")}
            >
              Weather
            </button>
            <button
              className={
                activeButton === "capital"
                  ? "additional-info-button active-button"
                  : "additional-info-button"
              }
              onClick={() => setActiveButton("capital")}
            >
              Capital
            </button>
            <button
              className={
                activeButton === "culture"
                  ? "additional-info-button active-button"
                  : "additional-info-button"
              }
              onClick={() => setActiveButton("culture")}
            >
              Culture
            </button>
          </div>
        )}

        <p className="country-description">
          {activeButton === "weather" &&
            `Norway's weather reflects its diverse geography, with coastal
      areas like Bergen enjoying milder temperatures due to the North
      Atlantic Drift. Inland and northern regions experience distinct
      seasons, featuring colder winters and warmer summers. The
      country's fjords create microclimates, offering a dynamic mix of
      coastal mildness and inland freshness.`}
          {activeButton === "capital" &&
            `Oslo, Norway's capital, seamlessly blends modernity with history.
        This vibrant city on the southern coast is a cultural and economic
        hub, showcasing sleek architecture, museums, and a commitment to
        sustainability. Oslo's dynamic atmosphere, framed by natural
        beauty and contemporary design, makes it a captivating destination
        where tradition meets innovation.`}
          {activeButton === "culture" &&
            `Norwegian culture blends deep traditions with modern influences,
        celebrating its Viking heritage through folklore and festivals.
        The arts scene thrives with renowned contributors, reflecting the
        country's commitment to inclusivity and progressive values. This
        dynamic fusion creates a uniquely Norwegian experience,
        harmonizing ancient customs with a forward-looking cultural ethos.`}
        </p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
