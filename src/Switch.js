import React,{useState} from 'react'
import './swich.css'

function Switch() {

    const [swich,setSwich] = useState('false')

    const handlSwich = () => {
        setSwich(!swich)
    }
    const backgroundColor = swich ? 'black': 'white'
    const buttonText = swich ? 'Light OFF':'Light ON'



  return (
    <div className='maine'>
        <div style={{backgroundColor}} className='div-item'>
            <button onClick={handlSwich}>{buttonText} </button>

        </div>
    </div>
  )
}

export default Switch
