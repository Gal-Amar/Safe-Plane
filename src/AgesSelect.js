import { IconInfoCircle } from '@tabler/icons-react';
import { Tooltip, Center, Text, rem , Select} from '@mantine/core';

const AgesSelect = (props) => {

  const rightSection = (
    <Tooltip
      label="Select the youngest traveler's age"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text component="div" c="dimmed" style={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle style={{ width: rem(120), height: rem(20) }} stroke={2} />
        </Center>
      </Text>
    </Tooltip>
  );


  return (  
    <Select
    label={"Traveler's ages" }
    data={['0-3', '3-6', '6-9', '9-12', '12-15', '15-18', '18-35', '35-50', '50-65','65+']}
    searchable
    value={props.formData.ages}
    onChange={( option) => props.setFormData({...props.formData, ages: option} ) }
    leftSection={rightSection}
    radius={10}
    withAsterisk
    size='lg'
    classNames={{
      input: 'ages-select-input',
      label:'ages-select-label',
      wrapper: 'ages-select-wrapper'
    }}
  />
  );
}
 
export default AgesSelect;