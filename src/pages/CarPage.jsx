import { useParams } from "react-router-dom"

export default function CarPage(){
    
    const {carId} = useParams()

    return(
        <>
            <h1>this is car Page</h1>
            <h2>car id #{carId}</h2>
        </>
    )
}