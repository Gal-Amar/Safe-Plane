import React from 'react';
const FlagComponent = React.lazy((value) => import(`./../node_modules/mantine-flagpack/dist/cjs/flags/${value}.js`));

const Flag = (props) => {
const code = props.value;
console.log(props.value)
  return (  
    
    <FlagComponent value={code}/>
  );
}

export default Flag;