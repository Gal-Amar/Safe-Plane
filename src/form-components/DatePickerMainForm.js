import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";

const DatePickerMainForm = (props) => {
  return (
    <DatePickerInput
      type="range"
      label="Pick travel dates "
      leftSection={<IconCalendar stroke={1.5} />}
      placeholder="Check-in date - Check-out date"
      {...props.form.getInputProps("dates")}
      withAsterisk
      radius={10}
      size="lg"
      hideOutsideDates
      minDate={new Date()}
      allowDeselect
      classNames={{
        label: "date-picker-main-form-label",
        input: "date-picker-main-form-input",
        placeholder: "date-picker-main-form-place-holder",
      }}
    />
  );
};

export default DatePickerMainForm;
