const { useEffect } = require("react")
const { useState } = require("react")



const Timer = ({fetchData}) => {
    const [minutes, setMinutes] = useState(0)
    const clickHandler = ()=>{
        fetchData()
        setMinutes(0)
    }
    useEffect(() => {
        const counter = setTimeout(()=>setMinutes(minutes + 1), 60*1000)   //one minute
        return () => {
            clearTimeout(counter);
          };
    }, [minutes])
    return (
        <>Last fetch was {minutes} minutes ago.<i className="pi pi-refresh ml-2" style={{ 'fontSize': '1.4em' }} onClick={clickHandler}></i></>
    )
}

export default Timer