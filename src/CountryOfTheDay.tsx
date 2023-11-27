import AdditionalInfo from "./AdditionalInfot";
import CountryOfTheDayMain from "./CountryOfTheDayMain";

const CountryOfTheDay = () => {
  return (
    <>
      {" "}
      <h3 className="country-of-the-day-heading">Coutry of The Day</h3>
      <div className="country-of-the-day">
        <CountryOfTheDayMain />
        <AdditionalInfo />
      </div>
    </>
  );
};

export default CountryOfTheDay;
