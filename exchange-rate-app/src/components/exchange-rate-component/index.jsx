import Card from '../card'
import BarChart from '../bar-chart'
import SelectExchangeRateCountry from '../selectCountries'
import Timer from '../timer/index'
import axiosInstance from '../services/axiosConfig'
import { useEffect } from 'react'
import { useState } from 'react'


const ExchangeRate = () => {
    const [countries, setCountries] = useState(null)
    const [selectedOptions, setSelectedOptions] = useState(null)
    const [fiveExchangeRates, setFiveExchangeRates] = useState(null)
    const [allConversionrates, setAllConversionRate] = useState(null)
    /*
        {
            countryCode : "INR",
            selectedCountries: [{name: "USA", code: "US"},.....],
            countryName : "India"
        }
    */
    useEffect(() => {
        axiosInstance.get("/get-exchange-codes").then(result => setCountries(result.data.result))
    }, [])
    useEffect(() => {
        if (selectedOptions != null) {
            const { countryCode, selectedCountries } = selectedOptions
            axiosInstance.post("/get-exchange-rates", {
                code: countryCode
            })
                .then(result => result.data.result)
                .then(conversion_rates => {
                    setAllConversionRate(conversion_rates)
                    setFiveExchangeRates(selectedCountries
                        .map(country => {
                            return {
                                code: country.code,
                                name: country.name,
                                rate: conversion_rates[country.code]
                            }
                        }))
                })
        }
    }, [selectedOptions])
    return (
        <Card title="Exchange Rate" className=" m-auto mt-5 w-11">

            {countries != null && <SelectExchangeRateCountry countries={countries} setSelectedOptions={setSelectedOptions} />}
            <div className="grid">
                {fiveExchangeRates != null &&
                    <div className="col md:col-6 sm:col-12">
                        <div className="flex fflex-row align-items-center"><Timer /><i className="pi pi-refresh ml-2" style={{ 'fontSize': '1.4em' }}></i></div>
                        <BarChart fiveExchangeRates={fiveExchangeRates} countryName={selectedOptions.countryName} countryCode={selectedOptions.countryCode} />
                    </div>
                }

            </div>

        </Card>
    )
}

export default ExchangeRate