import React from "react";
import { TrafficLight } from "./TrafficLight";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container-fluid flex-colum justify-content-center p-5 rounded-lg p-3 ">
			<TrafficLight/>
		</div>
	);
};

export default Home;
