import { Flex, Button, Input, Grid } from "@mantine/core";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const btns = [
  ["Hotel", "Specify Hotel Name", "hotel"],
  ["Parking", "Do you want hotel with parking? (Yes/ No)", "parking"],
  ["Beach", "Do you want beach close to your hotel? (Yes/ No)", "beach"],
  ["Restaurant/s", "Specify preferred restaurant/s name/s", "restaurants"],
  ["Bars", "Specify preferred bar/s name/s", "bars"],
  ["Cities", "Specify preferred cities you want to visit", "cities"],
  [
    "Car rental company",
    "Specify preferred Car rental company",
    "carRentalCompany",
  ],
  [
    "Dietary preferences",
    "Do you have any dietary preference?",
    "dietaryPreferences",
  ],
  ["Special preference", "Anything else to add?", "additionalData"],
];

const AdditionalData = (props) => {
  const [btnActive, setBtnActive] = useState(Array(btns.length).fill(false));

  const btnHandler = (index) => {
    setBtnActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const specialPreferenceFields = props.form.values.additionalData.map(
    (item, index) => (
      <Flex key={item.key} align="end" justify={"left"} gap={5}>
        <Input.Wrapper
          error={props.form.errors[`additionalData.${index}.specialPreference`]}
          mt={10}
          ml={15}
          w="80%"
        >
          Anything else to add?
          <Flex gap={10}>
            <Input
              w={"100%"}
              radius={15}
              classNames={{ input: "add-data-input" }}
              {...props.form.getInputProps(
                `additionalData.${index}.specialPreference`
              )}
            />

            <Button
              radius={15}
              className="add-data-btn input-btn"
              variant="transparent"
              onClick={() => props.form.removeListItem("additionalData", index)}
            >
              <FaTrash size={18} color="red" />
            </Button>
          </Flex>
        </Input.Wrapper>
      </Flex>
    )
  );

  const additionalDataFields = btns.map((item, index) => (
    <Flex
      key={item.key}
      align="center"
      justify={"left"}
      gap={5}
      className={
        btnActive[index]
          ? "add-data-input-flex"
          : "add-data-input-flex flex-none-active"
      }
    >
      <Input.Wrapper mt={10} ml={15} w="80%" error={props.form.errors[item[2]]}>
        {`${item[1]}`}
        <Flex gap={10}>
          <Input
            w={"100%"}
            radius={15}
            classNames={{ input: "add-data-input" }}
            {...props.form.getInputProps(item[2])}
          />
          <Button
            radius={15}
            className="add-data-btn input-btn"
            variant="transparent"
            onClick={() => {
              btnHandler(index);
              props.form.setFieldValue(item[2], "");
            }}
          >
            <FaTrash size={18} color="red" />
          </Button>
        </Flex>
      </Input.Wrapper>
    </Flex>
  ));

  return (
    <Grid>
      <Grid.Col>
        {specialPreferenceFields.length > 0 ? specialPreferenceFields : null}
        {additionalDataFields}
      </Grid.Col>
      <Grid.Col>
        <Flex mt={10} ml={15} gap={2} wrap="wrap">
          {btns.map((btn, index) =>
            btn[0] === "Special preference" ? (
              <Button
                key={index}
                variant="light"
                size="sm"
                radius="xl"
                className={"add-data-btn"}
                onClick={() =>
                  props.form.insertListItem("additionalData", {
                    specialPreference: "",
                  })
                }
              >
                <FiPlus size={17} />
                &nbsp;
                {` ${btn[0]} `}
              </Button>
            ) : (
              <Button
                key={index}
                variant="light"
                size="sm"
                radius="xl"
                className={
                  btnActive[index]
                    ? "add-data-btn add-btn-none-active"
                    : "add-data-btn "
                }
                onClick={() => btnHandler(index)}
              >
                <FiPlus size={17} />
                &nbsp;
                {` ${btn[0]} `}
              </Button>
            )
          )}
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default AdditionalData;
