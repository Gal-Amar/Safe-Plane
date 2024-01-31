import { SegmentedControl, Title, Button, Group, rem, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useState, useEffect } from 'react';
import { IconCalendar } from '@tabler/icons-react';
import React from 'react';
import MyLocation from "./myLocation";
import CountriesSelect from './CountriesSelect';

function GradientSegmentedControl() {
  return (
    <SegmentedControl
      radius="xl"
      size="md"
      data={['Couple Vacation', 'Family Vacation', 'Solo Trip']}
      classNames={{
        root: 'segmented-control-main-form-root', 
        indicator: 'segmented-control-main-form-indicator ',
        control: 'segment-control-main-form-control',
        label: 'segment-control-main-form-label'
      }}
      m={20}
    />
  );
}

const MainForm = () => {
  const [dateValue, setDateValue] = useState([0, 0]);

  return (
    <section id="main-form">
      <Title size={70}>Have a Safe Plane!</Title>
      <GradientSegmentedControl />
     
      <Group justify="center">
      <MyLocation />
        <DatePickerInput
          type="range"
          label="Pick travel dates "
          leftSection={
            <IconCalendar style={{ marginRight: '2', }} stroke={1.5} />
          }
          placeholder="Check-in date - Check-out date"
          value={dateValue}
          onChange={setDateValue}
          withAsterisk
          radius={10}
          classNames={{
            placeholder: 'date-picker-main-form-place-holder',
          }}
        />
       
        <CountriesSelect  placeholder='Origin'/>
        <CountriesSelect  placeholder='Destination'/>

        {/* <CountrySelect value={selectedDestCountry} onChange={handleDestCountryChange} /> */}
       
      </Group>
    </section>
  );
}

export default MainForm;