import { RangeSlider, Box, Text, Center } from '@mantine/core';


const BudgetRange = (props) => {
  return (
    <Center>
      <Box maw={400} mt={'xl'} className="slider-wrapper">

        <Text fw={500} size="sm">  Your Budget</Text>

        <RangeSlider
          classNames=
          {{
            label: 'range-slider-label',
            root: 'range-slider-root',
            track: 'range-slider-track'

          }}
          
          // styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
         color='rgb(255, 216, 76)'
          min={100}
          max={2000}
          defaultValue={[200, 1000]}
          thumbSize={26}
          size={'lg'}
          value={props.formData.budget}
          onChange={(ranges) => props.setFormData({ ...props.formData, budget: ranges })}
          marks={[
            { value: 500, label: '500' },
            { value: 1000, label: '1000' },
            { value: 1500, label: '1500' },
            { value: 2000, label: '2000+' },
          ]}
        />

      </Box>
    </Center>
  );

}

export default BudgetRange;