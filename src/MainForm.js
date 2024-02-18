import { MantineProvider, Container, SegmentedControl, Title, Group, Center, Checkbox, Flex, Grid, Card, rem, GridCol } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React, { useState, useEffect } from 'react';
import countries from './assets/countries.min.json'
import DatePickerMainForm from './DatePickerMainForm';
import AgesSelect from './AgesSelect';
import CountrySelectCreatable from './CountrySelectCreatable';
import BudgetRange from './BudgetRange';
import AditionalData from './AdditionalData'

import { IconFriends } from '@tabler/icons-react';
import { MdFamilyRestroom, MdMan4 } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";





function GradientSegmentedControl(props) {


  return (
    <SegmentedControl
      orientation={props.matches ? 'horizontal' : 'vertical'}
      radius={10}
      size="md"
      data={[
        {
          value: 'Couple Vacation',
          label: (
            <Center style={{ gap: 10 }}>
              <div>
                <IconFriends style={{ width: rem(23), height: rem(23) }} />
                <br />Couple Vacation
              </div>
            </Center>
          )
        },
        {
          value: 'Family Vacation',
          label: (
            <Center style={{ gap: 10 }}>
              <div>
                <MdFamilyRestroom style={{ width: rem(23), height: rem(23) }} />
                <br /> Family Vacation
              </div>
            </Center>
          )
        }
        ,
        {
          value: 'Friends Vacation',
          label: (
            <Center style={{ gap: 10 }}>
              <div>
                <GiThreeFriends style={{ width: rem(23), height: rem(23) }} />
                <br />Friends Vacation
              </div>
            </Center>
          )
        },
        {
          value: 'Solo Vacation',
          label: (
            <Center style={{ gap: 10 }}>
              <div>
                <MdMan4 style={{ width: rem(23), height: rem(23) }} />
                <br />Solo Vacation
              </div>
            </Center>
          )
        }
      ]}

      classNames={{
        root: 'segmented-control-main-form-root',
        indicator: 'segmented-control-main-form-indicator ',
        control: 'segment-control-main-form-control',
        label: 'segment-control-main-form-label',
        input: 'segment-control-main-form-input',

      }}
    />
  );
}

// const theme = createTheme({
//   components: {
//     SegmentedControl: SegmentedControl.extend({
//       classNames: (_, { size }) => ({
//         root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
//       }),
//     }),
//   },
// });

const MainForm = () => {
  const [add, setAdd] = useState('')
  const matches = useMediaQuery('(max-width: 48em)');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url).then(res => res.json()).then(data => setAdd(data.address.country + ", " + data.address.town))
    })
  }, [])


  const [formData, setFormData] = useState({
    originCountry: '',
    destCountry: '',
    dates: [0, 0],
    ages: '',
    checked: false,
    budget: [0, 1000],
    hotel: '',
    parking: '',
    beach: '',
    restuarant: '',
    bars: '',
    cities: '',
    carRentalCompany: '',
    diateryPreferences: '',
    additionalData: [],
  });



  return (


    <MantineProvider>
      <Container size="responsive" className='responsive-container' id="main-form">
        <Title size={45} className='main-form-title'>Plan your next trip!</Title>
        <Grid
          grow
          gutter="sm"
          justify='center'
          classNames={{
            root: 'main-form-grid-root',
            inner: 'main-form-grid-inner',
            col: 'main-form-grid-col'
          }}>
          <Grid.Col span={{ sm: 3, xs: 12 }} >
            <Center>
              <Card radius={30} className="main-form-manu-card" style={matches ? { width: 'max-content', margin: 0 } : {}}>
                <GradientSegmentedControl matches={matches} />
              </Card>
            </Center>
          </Grid.Col>
          <Grid.Col span={{ sm: 8, xs: 12 }}>
            <Card radius={30}
              classNames={{
                root: "main-form-form-card-root"
              }}>
              <Title size={20}>Fill trip details:</Title>
              <Center>
                <Flex
                  gap="lg"
                  justify="center"
                  align="flex-start"
                  direction="column"
                  wrap="wrap"
                >
                  <Group gap="lg" ml={15}  mt={15} align='start'>
                    <AgesSelect formData={formData} setFormData={setFormData} />
                    <DatePickerMainForm formData={formData} setFormData={setFormData} />
                  </Group>

                  <Group gap="lg" ml={15} mt={15} align='center'>
                    <CountrySelectCreatable countries={countries} formData={formData} setFormData={setFormData} placeholder='Origin' />
                    <CountrySelectCreatable countries={countries} formData={formData} setFormData={setFormData} placeholder='Destination' />
                    <Checkbox
                      classNames={{
                        body: 'main-form-checkbox-body',
                        input: 'main-form-checkbox-input'
                      }}
                      color='rgb(255, 216, 76)'
                      checked={formData.checked}
                      labelPosition="right"
                      mt={25}
                      label='Return from a another city?'
                      radius="md"
                      size="md"
                      onChange={(event) => setFormData({ ...formData, checked: event.currentTarget.checked })}
                    />
                    {formData.checked && <CountrySelectCreatable countries={countries} formData={formData} setFormData={setFormData} placeholder='Return' />}
                  </Group>
                </Flex>
              </Center>
              <BudgetRange formData={formData} setFormData={setFormData} />
              <Title size={20}>
                More to add?
              </Title>
              <AditionalData formData={formData} setFormData={setFormData} />
            </Card>
          </Grid.Col>

        </Grid>
        {console.log(formData)}
      </Container>
    </MantineProvider>


  );
}

export default MainForm;