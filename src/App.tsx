import axios from "axios";
import { useEffect, useState } from "react";
import { CountryType } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const getCountries = async () => {
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v2/all"
      );
      setCountries(data);
    } catch {
      console.log("Country api error!");
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  console.log(countries);
  return (
    <div>
      Countries app with TypeScript
      {countries.map((country) => (
        <h1 key={country.numericCode}>{country.name}</h1>
      ))}
    </div>
  );
}

export default App;
