// Import Statements
import Subheading from "./Subheading";
import {useState,useEffect} from "react";
import background from "./background";
import "../style/destination.css";

// Data
const data = require("../data.json");

// Crew Component
export default function Destination(){

    // State
    const [destinationId, setDestinationId] = useState(0);

    // Change Background onload
    window.onload = background("destination");

    // Data of Destination from data
    const {name, images, description, distance, travel} = data.destinations[destinationId];
    
    // Function to change destinationId onClick crew 
    const change = (id) => {
        setDestinationId(id);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.destination-names span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
		}
        list[destinationId].classList.add("active");
    }, [destinationId]);

    return(

        // Container
        <div className="container destination-container">

            {/* Subheading */}
            <Subheading number="1" heading = "Pick Your destination" />

            {/* Destination */}
            <div className="destination">

                {/* Destination Image */}
                <img src={images.png} alt={name}/>

                {/* Destination Text */}
                <div className="destination-text">

                    {/* Destination Pagination */}
                    <div className="destination-names">
                        <span onClick={() => change(0)}>Moon</span>
                        <span onClick={() => change(1)}>Mars</span>
                        <span onClick={() => change(2)} >Europa</span>
                        <span onClick={() => change(3)} >Titan</span>
                    </div>

                    <h3>
                        {name}
                    </h3>
                    <p>
                        {description}
                    </p>

                    {/* Destination Info */}
                    <div className="destination-info">
                        <div className="avg-distance">
                            <h4>
                                Average distance
                            </h4>
                            <span>
                                {distance}
                            </span>
                        </div>
                        <div className="travel-time">
                            <h4>
                                est. travel time
                            </h4>
                            <span>
                                {travel}
                            </span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}