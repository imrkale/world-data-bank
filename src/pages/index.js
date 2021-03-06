import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout.js'
import { useState } from "react";
import SearchInput from '../components/SearchInput/SearchInput.js'
import CountriesTable from '../components/CountriesTable/CountriesTable.js'

export default function Home({countries}) {
  const [keyword, setKeyword] = useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value.toLowerCase())
    setKeyword(e.target.value.toLowerCase());
  };
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );
  return (
  <Layout>
    <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries.length} countries</div>

        <div className={styles.input}>
          <SearchInput
            placeholder="Filter by Name, Region or SubRegion"
            onChange={onInputChange}
          />
        </div>
      </div>

      <CountriesTable countries={filteredCountries}/>
  
  </Layout>
  )
}

export const getStaticProps=async()=>{
  const res=await fetch("https://restcountries.eu/rest/v2/all");
  const countries=await res.json();

  return{
    props:{
      countries
    },
  };
};
