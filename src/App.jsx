import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClockHeading from './components/clockheading'
import ClockSlogan from './components/clockslogan'
import ClockTime from './components/clocktime'

function App() {
  

  return ( 
    <div className='bg-custom'>
 <center  className='first'>
     <ClockHeading></ClockHeading>
     <ClockSlogan></ClockSlogan>
     <ClockTime></ClockTime>
     </center>
    </div>
  )
  

}

export default App
