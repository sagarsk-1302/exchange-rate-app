const { useEffect } = require("react")
const { useState } = require("react")



const Timer = () => {
    const [minutes, setMinutes] = useState(0)
    useEffect(() => {
        const counter = setTimeout(()=>setMinutes(minutes + 1), 60*1000)   //one minute
        return () => {
            clearTimeout(counter);
          };
    }, [minutes])
    return (
        <>Last fetch was {minutes} minutes ago.</>
    )
}

export default Timer