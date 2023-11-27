import Article from "./Article";
import useFetch from "./useFetch";
import CountryNames from "./CountryNames";
import CountryOfTheDay from "./CountryOfTheDay";
import { useEffect, useState, useContext } from "react";
import { AppContext } from "./App";

interface Country {
  population: number;
  area: number;
  capital: string;
}

const UserPage = () => {
  const { test } = useContext(AppContext);

  const [country, setCountry] = useState("czechia");

  const { data, refetch } = useFetch<Country[]>(
    `https://restcountries.com/v3.1/name/${country}`,
    "country"
  );

  useEffect(() => {
    refetch();
  }, [refetch, country]);

  return (
    <div>
      <div className="country-facts">
        <label className="info-label">
          Show Info About Country
          <div>
            <CountryNames country={country} setCountry={setCountry} />

            <p className="country-info">
              Population:<b> {data?.[0].population} people</b>
            </p>
            <p className="country-info">
              Capital:<b> {data?.[0].capital}</b>
            </p>
            <p className="country-info">
              Area: <b>{data?.[0].area} km2</b>
            </p>
          </div>
        </label>
      </div>{" "}
      <div className="articles">
        {test.active && test.type === "Article Heading" ? (
          <Article imgSrc="./images/japan.jpg" imgAlt="Japan Culture">
            {test.change}
          </Article>
        ) : (
          <Article imgSrc="./images/japan.jpg" imgAlt="Japan Culture">
            Japan's New Year Traditions: Exploring the Cultural Marvels in the
            Land of the Rising Sun
          </Article>
        )}
        <Article imgSrc="./images/australia.jpg" imgAlt="Great Barier Reef">
          Australia's Natural Wonders: From the Outback to the Great Barrier
          Reef
        </Article>
        <Article imgSrc="./images/canada.jpg" imgAlt="Japan Culture">
          Canada's Frosty Charms: Traversing the Winter Wonders of the Great
          White North
        </Article>
      </div>
      <CountryOfTheDay />
    </div>
  );
};

export default UserPage;
