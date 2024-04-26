let ClockTime= ()=>{

   let time = new Date();

    return (
        <div> Clock date and time is: {time.toLocaleDateString()}-{time.toLocaleTimeString()}</div>
    )
   
}

export default ClockTime;