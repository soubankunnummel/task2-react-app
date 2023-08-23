import React,{useState} from 'react'

function Darkmod() {
    const [darkmode,setDarkMode] = useState('')

    const handlDarkMode= ()=> {
        setDarkMode(!darkmode)
    }
    const  backgroundColor = darkmode ? 'white':'black'
    const  btnName = darkmode ? 'dark Mode':'whit Mode'
  return (
    <div style={{backgroundColor}} className='maine'>
        <div className='div-item'>
      <button onClick={handlDarkMode}>{btnName}</button>
      </div>
    </div>
  )
}

export default Darkmod
