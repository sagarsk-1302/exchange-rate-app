import { useState } from "react"
import Registration from "../components/registration"
import ExchangeRate from '../components/exchange-rate-component'

const Home = () => {
    const [showBarGraph, setShowBarGraph] = useState(false)
    return (
        <div className="home">
            <p className="text-color md:text-3xl sm:md:text-4sm text-center font-bold shadow-1 p-3 surface-ground m-0">Exchange Rate Portal</p>
            <Registration toggleBarChart={setShowBarGraph} />
            {showBarGraph &&
                <ExchangeRate/>
            }
        </div>
    )
}

export default Home