import { Suspense } from "react";
import Countries from "./components/countries";
import type { CountriesType } from "./types/countryTypes";

const CountriesPromise = async (): Promise<CountriesType[]> => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  const data = await res.json();
  return data.countries;
};

const App = () => {
  return (
    <div>
      <Suspense>
        <Countries CountriesPromise={CountriesPromise()}></Countries>
      </Suspense>
    </div>
  );
};

export default App;
