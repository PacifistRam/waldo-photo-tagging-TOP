import { useEffect, useState } from "react"

const Timer = () => {
    const [ time, setTime ] = useState(0)
    const [ isActive, setIsActive ] = useState(true)

    useEffect(() => {
        console.log("Re Rendered")
      let intervalId
        if(isActive) {
          intervalId = setInterval(()=> {
          setTime(prevTime => prevTime + 1);
         }, 1000)
    }

    return () => clearInterval(intervalId)
    }, [isActive])

    const minutes = Math.floor(time / 60);
    const seconds = time % 60

    const pauseTime = () => {
        setIsActive(prevActive => !prevActive);
        console.log(time)
    }

  return (
    <div>
        <p>Timer: {minutes} : {seconds}</p>
        <button onClick={pauseTime}>Pause And Record</button>
    </div>
  )
}

export default Timer