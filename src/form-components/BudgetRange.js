import { RangeSlider, Box, Text, Center } from "@mantine/core";

const BudgetRange = (props) => {
  return (
    <Center>
      <Box maw={400} mt={"xl"} className="slider-wrapper">
        <Text fw={500} size="sm">
          {" "}
          Your Budget
        </Text>

        <RangeSlider
          classNames={{
            label: "range-slider-label",
            root: "range-slider-root",
            track: "range-slider-track",
          }}
          // styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
          color="rgb(255, 216, 76)"
          min={0}
          max={5000}
          defaultValue={[200, 1000]}
          thumbSize={26}
          size={"lg"}
          {...props.form.getInputProps("budget")}
          marks={[
            { value: 500, label: "" },
            { value: 1000, label: "1000" },
            { value: 1500, label: "" },
            { value: 2000, label: "2000" },
            { value: 2500, label: "" },
            { value: 3000, label: "3000" },
            { value: 3500, label: "" },
            { value: 4000, label: "4000" },
            { value: 4500, label: "" },
            { value: 5000, label: "5000+" },
          ]}
        />
        {/* {props.form.errors("budget") && (
          <Text>{props.form.errors["budget"]} </Text>
        )} */}
      </Box>
    </Center>
  );
};

export default BudgetRange;
