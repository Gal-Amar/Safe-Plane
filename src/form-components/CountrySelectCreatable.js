import React, { useState } from "react";
import { Combobox, InputBase, useCombobox } from "@mantine/core";
import {
  IconMap,
  IconPinFilled,
  IconBulbFilled,
  IconGlobeFilled,
} from "@tabler/icons-react";
import countries from "./../assets/countries.min.json";
import MyLocation from "./MyLocation";

export default function CountrySelectCreatable(props) {
  const [value, setValue] = useState(null);
  const [search, setSearch] = useState("");
  const [icon, setIcon] = useState(<IconMap />);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [data, setData] = useState([
    props.placeholder === "Origin" ? "Use my location" : "Feeling spontaneous",
    ...countries,
  ]);
  const exactOptionMatch = data.some(
    (item) => item.toLowerCase() === search.toLowerCase()
  );
  const filteredOptions = exactOptionMatch
    ? data
    : data.filter((item) =>
        String(item.toLowerCase()).includes(search.trim().toLowerCase())
      );

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  const handleCountryChange = (value) => {
    if (value === "Feeling spontaneous") {
      setIcon(<IconBulbFilled />);
    } else if (value === "Use my location") {
      setIcon(<IconPinFilled />);
      MyLocation(props.form);
    } else {
      setIcon(<IconGlobeFilled />);
    }
    console.log(value);
    if (props.placeholder === "Origin") {
      if (value !== "Use my location") {
        props.form.setFieldValue("originCountry", value);
      }
    } else if (props.placeholder === "Destination") {
      props.form.setFieldValue("destCountry", value);
    } else {
      props.form.setFieldValue("returnCountry", value);
    }
  };

  return (
    <Combobox
      store={combobox}
      w={280}
      withinPortal={true}
      {...props.form.getInputProps(
        props.placeholder === "Origin"
          ? "originCountry"
          : props.placeholder === "Destination"
          ? "destCountry"
          : "returnCountry"
      )}
      onOptionSubmit={(val) => {
        if (val === "$create") {
          //adds new val to options
          setData((current) => [
            ...current,
            search[0].toUpperCase() + search.slice(1),
          ]);
          //set value as the new value
          setValue(search);
          handleCountryChange(search);
        } else {
          setValue(val);
          setSearch(val);
          handleCountryChange(val);
        }
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          required
          w={280}
          classNames={{
            input: "country-combobox-input",
            label: "country-combobox-label",
          }}
          size="lg"
          label={`Select ${props.placeholder} Country`}
          rightSection={<Combobox.Chevron />}
          defaultValue={
            props.placeholder === "return" ? props.formData.destCountry : ""
          }
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || "");
          }}
          placeholder={props.placeholder === "Destination" ? "To" : "From"}
          rightSectionPointerEvents="none"
          leftSection={icon}
          radius={10}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options mah={200} style={{ overflowY: "auto" }}>
          {options}
          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">
              + Create {search[0].toUpperCase() + search.slice(1)}
            </Combobox.Option>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
