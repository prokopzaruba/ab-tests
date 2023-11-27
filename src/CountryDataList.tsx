import useFetch from "./useFetch";

interface Name {
  common: string;
}

interface Country {
  name: Name;
}

const CountryDataList = () => {
  const { data } = useFetch(
    "https://restcountries.com/v3.1/all",
    "countries"
  ) as { data: Country[] };
  return (
    <>
      {data && (
        <>
          <input
            list="country-options"
            className="country-input"
            placeholder="Select Country"
          />
          <datalist id="country-options">
            <option value="" disabled>
              Select a country
            </option>
            {data.map((v) => (
              <option key={v.name.common} value={v.name.common}></option>
            ))}
          </datalist>{" "}
        </>
      )}{" "}
    </>
  );
};

export default CountryDataList;
