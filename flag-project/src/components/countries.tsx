import { use } from "react";
import type { CountriesType } from "../types/countryTypes";
import Country from "./country";

export interface CountriesProps {
  CountriesPromise: Promise<CountriesType[]>;
}

const Countries = ({ CountriesPromise }: CountriesProps) => {
  const countryhook = use(CountriesPromise);
  return (
    <div>
      <h1>Countries</h1>
      <div className="grid grid-cols-3">
        {countryhook.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
