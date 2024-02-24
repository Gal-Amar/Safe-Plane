import { Container, Title, Group, Center, Checkbox, Flex, Grid, Card, Anchor, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import React, { useState, useEffect } from 'react';
import DatePickerMainForm from './form-components/DatePickerMainForm';
import AgesSelect from './form-components/AgesSelect';
import CountrySelectCreatable from './form-components/CountrySelectCreatable';
import BudgetRange from './form-components/BudgetRange';
import AdditionalData from './form-components/AdditionalData';
import MySegmentedControl from './form-components/MySegmentedControl';
import { Notifications } from '@mantine/notifications';
import { IconPlane } from '@tabler/icons-react';
import '@mantine/notifications/styles.css';

const MainForm = () => {
  const matches = useMediaQuery('(max-width: 48em)');

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(pos => {
  //     const { latitude, longitude } = pos.coords;
  //     const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  //     fetch(url).then(res => res.json()).then(data => setAdd(data.address.country + ", " + data.address.city))

  //   })
  // }, [])


  const [formData, setFormData] = useState({
    vacationType: '',
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
    <div className='main-form-section'>
      <Notifications position="bottom-right" />
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
                <MySegmentedControl matches={matches} setFormData={setFormData} />
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
                  <Group gap="lg" ml={15} mt={15} align='start'>
                    <AgesSelect formData={formData} setFormData={setFormData} />
                    <DatePickerMainForm formData={formData} setFormData={setFormData} />
                  </Group>

                  <Group gap="lg" ml={15} mt={15} align='center'>
                    <CountrySelectCreatable formData={formData} setFormData={setFormData} placeholder='Origin' />
                    <CountrySelectCreatable formData={formData} setFormData={setFormData} placeholder='Destination' />
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
                    {formData.checked && <CountrySelectCreatable formData={formData} setFormData={setFormData} placeholder='Return' />}
                  </Group>
                </Flex>
              </Center>
              <BudgetRange formData={formData} setFormData={setFormData} />
              <Title size={20}>
                More to add?
              </Title>
              <AdditionalData formData={formData} setFormData={setFormData} />

              <div className="main-form-btn-group">
                <Group>
                  <Button className='cencel-btn' radius={10}> Cencel </Button>
                  <Button
                    className='submit-btn'
                    radius={10}
                    variant="gradient"
                    justify='space-between'
                    rightSection={<IconPlane />}
                    gradient={{ from: '#57333d', to: '#f4976c', deg: 90 }}
                  >
                    I'm Ready!
                  </Button>
                </Group>
              </div>

            </Card>
          </Grid.Col>
        </Grid>
        {console.log(formData)}
      </Container>

    </div>


  );
}

export default MainForm;