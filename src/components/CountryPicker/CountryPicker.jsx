import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from './CountryPicker.module.css';

import { fetchCountries } from "../../api";


const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() => {
        const fetchAPIcountry = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPIcountry();
    }, [setFetchedCountries])

    // console.log(fetchedCountries);

    return (
        <FormControl className={styles.container} > 
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
