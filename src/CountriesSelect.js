import { useState, useEffect } from 'react';
import { Select } from '@mantine/core';
import jsonData from './assets/countries.json'
import MyLocation from './myLocation';
import { IconBrandAirbnb } from '@tabler/icons-react';

const CountriesSelect = (props) => {
  const [selectedCountry, setSelectedCountry] = useState('My location');

  const selectData = (props.placeholder === 'Origin') ? ['Use my location'] : ['My selection'];
  jsonData['countries'].forEach((country) => {
    selectData.push({ group: country["countryname"], items: [country["countryname"], ...country["cities"]] });
  });

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  return (
    <Select
      label={`Select ${props.placeholder} Country`}
      data={selectData}
      value={
        (selectedCountry === 'Use my location') ?
          <MyLocation /> : selectedCountry
      }
      onChange={handleCountryChange}
      leftSection={
        (selectedCountry === 0) ?
          <IconBrandAirbnb /> :
          ''
      }
      placeholder={(props.placeholder === 'origin') ? 'From' : 'To'}
      radius={10}
      searchable
      withAsterisk
      checkIconPosition="right"
    />
  );
}

export default CountriesSelect;