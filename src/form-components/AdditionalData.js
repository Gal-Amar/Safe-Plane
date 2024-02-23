import { Flex, Button, Input, Grid } from '@mantine/core'
import { FiPlus } from "react-icons/fi";
import { useState} from 'react'
import { FaTrash } from "react-icons/fa";


const btns = [
  ['Hotel', 'Specify Hotel Name','hotel'],
  ['Parking', 'Do you want hotel with parking? (Yes/ NO)', 'parking'],
  ['Beach', 'Do you want beach close to your hotel?', 'beach'], 
  ['Restaurant', 'Specify preferred restuarant name', 'restuarant'], 
  ['Bars','Specify preferred bar/s name','bars' ], 
  ['Cities', 'Specify preferred cities you want to visit', 'cities'], 
  ['Car rental company', 'Specify preferred Car rental company', 'carRentalCompany'], 
  ['Dietary preferences', 'Do you have any dietary preference?', 'diateryPreferences'], 
  ['Special preference', 'Anything else to add?','additionalData']
]

const AdditionalData = (props) => {

  const [btnActive, setBtnActive] = useState((Array(btns.length).fill(false)));
  const [specialCnt, setSpecialCnt] = useState(0);
  const [specialData, setSpecialData] = useState([]);


  const specialArrayHandler = (signal,setFormData) => {
    if(signal === "plus"){
      setSpecialCnt(specialCnt + 1);
      setSpecialData(prevArray => [...prevArray, [true, specialCnt-1,'']]); //initialize additiona data array
      
    }
    else {
      setSpecialCnt(specialCnt - 1);
      deleteAddDataToFromData(signal, setFormData); //delete element fron fornData and special array 
    }
  }


  const deleteAddDataToFromData = (index, setFormData) => {
    setSpecialData(prevArray => {
      const newArray = [...prevArray];
      newArray.splice(index, 1);
      return newArray;
    });
    setFormData(prevFormData => ({
      ...prevFormData,
      additionalData : prevFormData.additionalData.filter((_, i) => i !== index)
     
    }))
   
  }


//   adding the data inside the specialDataArray in order to create a full string out of is, and than after 
//  this, updating the form data with updated sting
  const addAddDataToFromData = (data, specialIndex, setFormData) => {
    setSpecialData(prevArray => {
     const updatedArray = [...prevArray[specialIndex]];
      updatedArray[2] = data;
      return [...prevArray.slice(0, specialIndex), updatedArray, ...prevArray.slice(specialIndex + 1)];
    });  
    setFormData(prevFormData => ({
      ...prevFormData,
      additionalData : specialData.map(item => item[2])
    }))

  }

  const btnHandler = (index) => {
    setBtnActive(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }


  return (
    <Grid>
      <Grid.Col>
      
    {btns.map((btn, index) => (
          btn[0] === "Special preference" ?   
          
          Array.from({ length: specialCnt }, (_, specialIndex) => (
            
            <Flex key={specialIndex} align='end' justify={'left'} gap={5} className={specialData[specialIndex][0] ? 'add-data-input-flex' : 'add-data-input-flex flex-none-active'}>
              <Input.Wrapper mt={10} ml={15} w='70%'>
                {`${btn[1]}`}
                <Input radius={15} classNames={{ input: 'add-data-input' }} onChange={(event) =>  addAddDataToFromData(event.currentTarget.value, specialIndex, props.setFormData)}/>
              </Input.Wrapper>
              <Button radius={15} className='add-data-btn input-btn' variant="transparent" onClick={() => specialArrayHandler(specialIndex, props.setFormData)}>
                <FaTrash size={18} color='red' />
              </Button>
            </Flex>
            
          ))
        

          :
          <Flex   key={index} align='end' justify={'left'} gap={5} className={btnActive[index] ? 'add-data-input-flex' : 'add-data-input-flex flex-none-active'} >
            <Input.Wrapper mt={10} ml={15} w='70%'>
            {`${btn[1]}`}
              <Input radius={15} classNames={{ input: 'add-data-input' }} onChange={(event) =>  props.setFormData(({...props.formData, [btn[2]]: event.currentTarget.value} ))}/>
            </Input.Wrapper>
            <Button   radius={15} className='add-data-btn input-btn' variant="transparent"
              onClick={() => {
                btnHandler(index)
              }}
            >
              <FaTrash size={18} color='red' /> </Button>
          </Flex>
        ))}
      
      </Grid.Col>
      <Grid.Col>
        <Flex mt={10} ml={15} gap={2} wrap="wrap" >

          {
            btns.map((btn, index) => (
            btn[0] === "Special preference" ?  <Button  key={index} variant="light" size="sm" radius="xl" className={'add-data-btn'}
              onClick={() => specialArrayHandler("plus", null)}
            >
              <FiPlus size={17} />
              &nbsp;
              {` ${btn[0]} `}
            </Button>
            :
              <Button  key={index} variant="light" size="sm" radius="xl" className={btnActive[index] ? 'add-data-btn add-btn-none-active' : 'add-data-btn '}
              onClick={() => 
                btnHandler(index)
              }
              >
                <FiPlus size={17} />
                &nbsp;
                {` ${btn[0]} `}
              </Button>
            ))
          }
        </Flex>
      </Grid.Col>
    </Grid>
  );
}

export default AdditionalData;