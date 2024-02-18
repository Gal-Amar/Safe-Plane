import React,{ useState } from 'react';
import { Combobox, InputBase, useCombobox } from '@mantine/core';
import { IconBrandAirbnb, IconPinFilled, IconBulbFilled ,IconGlobeFilled} from '@tabler/icons-react';
// import MyLocation from './myLocation'; 
import  {  useEffect } from 'react';





export default function CountrySelectCreatable(props) {
  const [add,setAdd] = useState('')

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(pos=>{
        const {latitude,longitude} = pos.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res=>res.json()).then(data=>setAdd(data.address.country + ", " + data.address.town))
    })
  },[])

 
  const [value, setValue] = useState(null);
  const [search, setSearch] = useState('');
  const [icon, setIcon] = useState(<IconBrandAirbnb />);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [data, setData] = useState([(props.placeholder === 'Origin' ) ? "Use my location" : "Feeling spontaneous",...props.countries]);
  const exactOptionMatch = data.some((item) => item.toLowerCase() === search.toLowerCase());
  const filteredOptions = exactOptionMatch
    ? data
    : data.filter((item) => String(item.toLowerCase()).includes(search.trim().toLowerCase()));

  const options = filteredOptions.map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    
  ));

  const handleCountryChange = (value) => {
    if (value === 'Feeling spontaneous' ) {
      setIcon(<IconBulbFilled/>)
    }
    else if ( value === 'Use my location'){
      setIcon(<IconPinFilled/>)
    }
    else {
      setIcon(<IconGlobeFilled/>)
    }
    (props.placeholder === 'Origin' )?  props.setFormData({...props.formData, originCountry: value}) :  props.setFormData({...props.formData, destCountry: value})
  };
 

  return (
    <Combobox
     
      
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        if (val === '$create') {
          setData((current) => [...current, search[0].toUpperCase()+search.slice(1)]);
          setValue(search[0].toUpperCase()+search.slice(1));
        } else {
          setValue(val);
          setSearch(val);
        }
        handleCountryChange(val);
        combobox.closeDropdown();
      }}
      
    >
     
       <Combobox.Target   >
         <InputBase
          classNames=
          {{input: "country-combobox-input",
            label: "country-combobox-label",
        }}
          size='lg'
          label={`Select ${props.placeholder} Country`}
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch((search === 'Use my location' ) ? {add} : event.currentTarget.value);
           
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder={(props.placeholder === 'Origin') ? 
          {add} : (props.placeholder === 'Return') ?
           'From' : 'To'}
          rightSectionPointerEvents="none"
          leftSection={icon}
          radius={10}
          defaultValue={(props.placeholder === 'Origin' )? {add} : ''}

          
        />
      </Combobox.Target>

      <Combobox.Dropdown >
        <Combobox.Options mah={200} style={{ overflowY: 'auto' }}> 
          {options}
          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search[0].toUpperCase()+search.slice(1)}</Combobox.Option>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}