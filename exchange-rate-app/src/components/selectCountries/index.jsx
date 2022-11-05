import { MultiSelect } from 'primereact/multiselect';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useEffect } from 'react';

const SelectExchangeRateCountry = ({ countries,setSelectedOptions }) => {
    const [selectedCountry, setSelectedCounty] = useState(countries[1])
    return (
        <div className="grid">
            <div className="col-6 md:col-6 sm:col-12">
                <p>Select a country to comapare the exchange rates</p>
                <Dropdown
                    value={selectedCountry}
                    options={countries}
                    onChange={(e) => setSelectedCounty(e.value)}
                    optionLabel="name"
                    className="min-w-full"
                    placeholder="Select a Country" />
            </div>
            <div className="col-6 md:col-6 sm:col-12">
                <SelectCountries countries={countries} selectedCountry={selectedCountry} setSelectedOptions={setSelectedOptions}/>
            </div>
        </div>
    )
}

const SelectCountries = ({ countries, selectedCountry, setSelectedOptions }) => {
    const [selectedCountries, setSelectedCountries] = useState(countries.slice(2,7))
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true)
    const btnSubmit=() =>{
        setSelectedOptions({
            countryCode : selectedCountry.code,
            selectedCountries: selectedCountries,
            countryName : selectedCountry.name
        })
    }
    useEffect(() => {
        const names = countries.map(c => c.name)
        setSelectedCountries(selectedCountries.filter(e => names.includes(e.name)))
        if (selectedCountries.length == 5) {
            setSubmitBtnDisabled(false)
        } else {
            setSubmitBtnDisabled(true)
        }
    }, [countries])
    const onChipSelectedHandler = (e) => {
        setSelectedCountries(e.value)
        if (e.value.length == 5) {
            setSubmitBtnDisabled(false)
        } else {
            setSubmitBtnDisabled(true)
        }
    }
    return (
        <div className="selectcountries">
            <p>Select 5 countries to get the comparision</p>
            <div className="">
                <MultiSelect
                    display="chip"
                    optionLabel="name"
                    value={selectedCountries}
                    selectionLimit={5}
                    options={countries.filter(e => e.name != selectedCountry.name)}
                    onChange={onChipSelectedHandler}
                    showSelectAll={false}
                    className="min-w-full max-w-full h-auto"
                />
            </div>
            <Button label="Submit" className="p-button-raised p-button-rounded mt-3 w-3"
            style={{float:"right"}} disabled={submitBtnDisabled} onClick={btnSubmit}/>
        </div>

    )
}

export default SelectExchangeRateCountry