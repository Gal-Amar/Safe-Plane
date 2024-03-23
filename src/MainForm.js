import DatePickerMainForm from "./form-components/DatePickerMainForm";
import AgesSelect from "./form-components/AgesSelect";
import CountrySelectCreatable from "./form-components/CountrySelectCreatable";
import BudgetRange from "./form-components/BudgetRange";
import AdditionalData from "./form-components/AdditionalData";
import MySegmentedControl from "./form-components/MySegmentedControl";

import {
  Container,
  Title,
  Group,
  Center,
  Checkbox,
  Flex,
  Grid,
  Card,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import { IconPlane } from "@tabler/icons-react";
import "@mantine/notifications/styles.css";

// const CencelHandler = () => {};
// const SubmitHandler = () => {};

const MainForm = () => {
  const matches = useMediaQuery("(max-width: 48em)");
  const form = useForm({
    initialValues: {
      ages: "",
      vacationType: "Couple Vacation",
      originCountry: "",
      destCountry: "",
      dates: [0, 0],
      anotherCityChecked: false,
      returnCountry: "As destination country",
      budget: [0, 1000],
      hotel: "",
      parking: "",
      beach: "",
      restaurants: "",
      bars: "",
      cities: "",
      carRentalCompany: "",
      dietaryPreferences: "",
      additionalData: [],
    },
    validate: {
      ages: (val) => (val === "" ? "Please enter ages" : null),
      dates: (val) =>
        val[0] === 0 && val[1] === 0 ? "Please enter dates" : null,
      originCountry: (val) =>
        /^(?:\uD83C[\uDDE6-\uDDFF]){2}\s+[a-zA-Z\s]+$/.test(val)
          ? null
          : "Invalid origin country/City name",
      destCountry: (val) =>
        /^(?:\uD83C[\uDDE6-\uDDFF]){2}\s+[a-zA-Z\s]+$/.test(val)
          ? null
          : "Invalid destination country/City name",
      returnCountry: (val) =>
        /^(?:\uD83C[\uDDE6-\uDDFF]){2}\s+[a-zA-Z\s]+$/.test(val) &&
        val !== "As destination country"
          ? null
          : "Invalid return country/City name",
      budget: (val) => (val[1] <= 50 ? "Invalid budget" : null),
      hotel: (val) => (/^[a-zA-Z\s]+$/.test(val) ? null : "Invalid hotel name"),
      beach: (val) =>
        /^(yes|Yes|YES|no|No|NO)+$/.test(val)
          ? null
          : "Beach should be answered as Yes/No",
      parking: (val) =>
        /^(yes|Yes|YES|no|No|NO)$/.test(val)
          ? null
          : "Parking should be answered as Yes/No",
      bars: (val) =>
        /^[a-zA-Z\s]+$/.test(val) ? null : "Invalid bar/s name/s",
      restaurants: (val) =>
        /^[a-zA-Z\s]+$/.test(val) ? null : "Invalid restaurant/s name/s",
      cities: (val) => (/^[a-zA-Z\s]+$/.test(val) ? null : "Invalid city name"),
      carRentalCompany: (val) =>
        /^[a-zA-Z\s]+$/.test(val)
          ? null
          : "Invalid car rental company/s name/s",
      dietaryPreferences: (val) =>
        /^[a-zA-Z\s]+$/.test(val) ? null : "Invalid dietary preferences",
      additionalData: {
        specialPreference: (val) =>
          /^[a-zA-Z\s]+$/.test(val) ? null : "Invalid input text",
      },
    },
  });

  return (
    <div className="main-form-section">
      <Notifications position="bottom-right" />
      <Container
        size="responsive"
        className="responsive-container"
        id="main-form"
      >
        <Title size={45} className="main-form-title">
          Plan your next trip!
        </Title>
        <form
          onSubmit={form.onSubmit(() => {
            console.log("submitted");
          })}
        >
          <Grid
            grow
            gutter="sm"
            justify="center"
            classNames={{
              root: "main-form-grid-root",
              inner: "main-form-grid-inner",
              col: "main-form-grid-col",
            }}
          >
            <Grid.Col span={{ sm: 3, xs: 12 }}>
              <Center>
                <Card
                  radius={30}
                  className="main-form-manu-card"
                  style={matches ? { width: "max-content", margin: 0 } : {}}
                >
                  <MySegmentedControl form={form} matches={matches} />
                </Card>
              </Center>
            </Grid.Col>
            <Grid.Col span={{ sm: 8, xs: 12 }}>
              <Card
                radius={30}
                classNames={{
                  root: "main-form-form-card-root",
                }}
              >
                <Title size={20}>Fill trip details:</Title>
                <Center>
                  <Flex
                    gap="lg"
                    justify="center"
                    align="flex-start"
                    direction="column"
                    wrap="wrap"
                  >
                    <Group gap="lg" ml={15} mt={15} align="start">
                      <AgesSelect form={form} />
                      <DatePickerMainForm form={form} />
                    </Group>

                    <Group gap="lg" ml={15} mt={15} align="center">
                      <CountrySelectCreatable
                        form={form}
                        placeholder="Origin"
                      />
                      <CountrySelectCreatable
                        form={form}
                        placeholder="Destination"
                      />
                      <Checkbox
                        classNames={{
                          body: "main-form-checkbox-body",
                          input: "main-form-checkbox-input",
                        }}
                        color="rgb(255, 216, 76)"
                        checked={form.values["checked"]}
                        labelPosition="right"
                        mt={25}
                        label="Return from a another city?"
                        radius="md"
                        size="md"
                        {...form.getInputProps("anotherCityChecked", {
                          type: "checkbox",
                        })}
                      />
                      {form.values["anotherCityChecked"] && (
                        <CountrySelectCreatable
                          form={form}
                          placeholder="Return"
                        />
                      )}
                    </Group>
                  </Flex>
                </Center>
                <BudgetRange form={form} />
                <Title size={20}>More to add?</Title>
                <AdditionalData form={form} />

                <div className="main-form-btn-group">
                  <Group>
                    <Button className="cancel-btn" radius={10} size="lg">
                      Cancel
                    </Button>
                    <Button
                      size="lg"
                      type="submit"
                      className="submit-btn"
                      radius={10}
                      variant="gradient"
                      justify="space-between"
                      rightSection={<IconPlane />}
                      gradient={{ from: "#57333d", to: "#f4976c", deg: 90 }}
                      w={"fit-content"}
                    >
                      I'm Ready!
                    </Button>
                  </Group>
                </div>
              </Card>
            </Grid.Col>
          </Grid>
        </form>
        {console.log(form)}
      </Container>
    </div>
  );
};

export default MainForm;
