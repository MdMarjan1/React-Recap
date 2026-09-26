import { useState } from "react";
import type { CountriesType } from "../types/countryTypes";

export interface CountryProps {
  country: CountriesType;
}

const Country = ({ country }: CountryProps) => {
  const [visited, setVisited] = useState<boolean>(false);
  const handelKlick = () => {
    setVisited(!visited);
  };

  return (
    <div className={`border-2 border-red-500 rounded-r-2xl p-2 m-2.5 ${visited ? "bg-emerald-600" : ""}`}>
      <h1>{country.name.official}</h1>
      <img
        className="w-90"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <button onClick={handelKlick}>
        {visited ? "visited" : "Mark as Visited"}
      </button>
    </div>
  );
};

export default Country;
