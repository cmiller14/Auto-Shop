import { Car } from "../types/DataTypes";

interface CarListingProps {
    car: Car;
}

export default function CarListing(props: CarListingProps) {
    return (
        <li key={props.car.vin} className="reservationListing">
                <img src={props.car.imageSrc} alt="Sick superhero vehicle" className="vehicleReservationImage"></img>
                {`${props.car.year} ${props.car.make} ${props.car.model} ${props.car.edition} ${props.car.color} ${props.car.mileage}`}
                <span className="outerButtonContainer">
                    <span className="buttonContainer">
                        <button id="reserveButton" onClick={() => console.log(`You reserved the ${props.car.year} ${props.car.make} ${props.car.model}`)}>Reserve</button>
                    </span>
                </span>
        </li>
    )
}