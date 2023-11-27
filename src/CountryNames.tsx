import { useContext, useState } from "react";
import useFetch from "./useFetch";
import { AppContext } from "./App";

interface Name {
  common: string;
}

interface Country {
  name: Name;
}

interface Props {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

// .name.common

const CountryNames = (props: Props) => {
  const { test, setTest } = useContext(AppContext);

  const [countryInput, setCountryInput] = useState("");

  const { data } = useFetch<Country[]>(
    "https://restcountries.com/v3.1/all",
    "countries"
  );

  const onChangeCountry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setCountry(() => countryInput);
  };

  return (
    <>
      <div className="country-names">
        {data && (
          <form onSubmit={(e) => onChangeCountry(e)}>
            <input
              list="country-options"
              className="country-input"
              placeholder="Select Country"
              onChange={(e) => setCountryInput(e.target.value)}
              value={countryInput}
            />
            <datalist id="country-options">
              <option value="" disabled>
                Select a country
              </option>
              {data.map((v) => (
                <option key={v.name.common} value={v.name.common}></option>
              ))}
            </datalist>{" "}
            {test.active && test.type === "Country Button" ? (
              <button
                onClick={() =>
                  setTest((prevState) => ({
                    ...prevState,
                    clicked: prevState.clicked + 1,
                  }))
                }
                className={`show-info-button ${test.change}`}
              >
                Show info
              </button>
            ) : (
              <button className="show-info-button">Show info</button>
            )}
          </form>
        )}
      </div>
    </>
  );
};

export default CountryNames;
