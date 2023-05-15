

import { useEffect, useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";


const Toggle = () => {
// stored variable is intially null
  const [stored, setStored] = useState('Light')

// once DOM is loaded the stored variable is set to the theme value stored in local storage
// if nothing is stored in local storage the variable is set to null 
  useEffect(
    ()=> {
      if(localStorage.getItem('theme') !== null){
        setStored(localStorage.getItem('theme'))
      }else{
        localStorage.setItem('theme','Light')
      }
  },[]);


// mode stores the value returned from stored once the DOM is loaded, 
  const [mode, setMode] = useState(stored);

// function to change theme icon on the clent side, if the mode returns Light this function will 
// change the theme value to Dark in local storage and update the mode variable to Dark , if null or Dark is
// returned local storage will be upated to a theme of Light, the mode variable will also be change to Light
console.log(mode)
const handleModeIcon = ()=> {

      if(mode === 'Light'){
      localStorage.setItem('theme','Dark')
      setMode('Dark')
    }else{
    localStorage.setItem('theme','Light')
    setMode('Light')
    }
  }


  return (
    // if the user selects the icon while mode is set to Light , the icon will change to a moon
    // if the user selects the icon while mode is set to Dark, the icon will change to a sun
    <div className="cursor-pointer" onClick={handleModeIcon}>{mode === 'Light'?<CiLight size={25}/>:<CiDark size={25}/>}</div>
  )
}
export default Toggle
