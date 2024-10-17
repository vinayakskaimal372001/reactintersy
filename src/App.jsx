
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'





function App() {

const [interest,setInterset]=useState(0)
const [principle,setprinciple]=useState(0)
const [rate,setRate]=useState(0)
const [year,setyear]=useState(0)
const[invalidPrinciple,setInvalidPrinciple]=useState(false)
const[invalidRate,setInvalidRate]=useState(false)
const[invalidYear,setInvalidYear]=useState(false)





// function to validate inputs
const validateInputs =(inputTag)=>{
console.log(typeof inputTag);
const {name,value} = inputTag
console.log(name,value);
// console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
console.log(!!value.match(/^\d*.?\d+$/));///regular expnpm run dev
if(name=="principle")
 { setprinciple(value)
if(!!value.match(/^\d*.?\d+$/))
{
  setInvalidPrinciple(false)
}
else
{setInvalidPrinciple(true)}}
else if(name=="Rate")
  { setRate(value)
  if(!!value.match(/^(100(\.0{1,2})?|[0-9]{1,2}(\.[0-9]{1,2})?)$/ ))
  {
    setInvalidRate(false)
  }
  else
  {setInvalidRate(true)}
  
  
  }
  else (name=="Year")
    { setyear(value)
    if(!!value.match(/^\d*.?\d+$/))
    {
      setInvalidYear(false)
    }
    else
    {setInvalidYear(true)}
    
    
    }




}

const handlecalculate =(e) =>{
e.preventDefault()//to prebent errors cancelleable attribute
if(principle&&rate&&year)
{setInterset(principle*rate*year/100)
  console.log("yes");
  
}
else
alert("complete full form")

}

const handlereset =()=>{
setInterset(0)
setRate(0)
setprinciple(0)
setyear(0)
setInvalidPrinciple(false)
setInvalidRate(false)
setInvalidYear(false)


}


  return (

    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h3>Simple Interest Calculator</h3>
      <p>Calculate your simple interest</p>
      <div className="bg-warning p-5 text-center rounded">
        <h1>₹ {interest}</h1>
        <p className='fw-bolder'>Total Simple Interest</p>
      </div>
   
      <form className='mt-5'>
           {/* principle */}
        <div className='mb-3'>
        <TextField value={principle|| ""} name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label=" ₹ Principle Amount" variant="outlined" />
        
        </div>

        {/* invalid principle  - condition renderinggg */}
        { invalidPrinciple && <div className='mb-3 text-danger fw-bolder'>
        Invalid Principle Amount!!!
        </div>
}
        {/* Rate */}
      
        <div className='mb-3'>
        <TextField value={rate|| ""} name='Rate' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label=" ₹ Rate" variant="outlined" />
        
        </div>
{/* invalid rate */}

{ invalidRate && <div className='mb-3 text-danger fw-bolder'>
        Invalid rate!!!
        </div>}
         {/* Time*/}
      
        <div className='mb-3'>
        <TextField value={year|| ""} name='Year' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="🕦 Time Period" variant="outlined" />
        
        </div>

        {/* invalid  */}

        {/* invalid principle  - condition renderinggg */}
        { invalidYear && <div className='mb-3 text-danger fw-bolder'>
        Invalid Year
        </div>
}
        <Stack direction="row" spacing={2}>
        <Button type='submit' variant="contained" onClick={handlecalculate} disabled={ invalidPrinciple | invalidRate | invalidYear } style={{width:'50%',height:'70px'}} className='bg-dark'>Calculate</Button>
        <Button onClick={handlereset}  variant="outlined" style={{width:'50%',height:'70px'}} >Reset</Button>
        </Stack>
      </form>
      </div>
    </div>
  )
}

export default App
