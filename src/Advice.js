import { useEffect, useState } from "react";
import dice from "./images/icon-dice.svg";

const Advice = () => {
	const [advice, setAdvice] = useState("");
	const [adviceNum, setAdviceNum] = useState(0);

	const fetchAdvice = async () => {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();
		setAdvice(data.slip.advice);
		setAdviceNum(data.slip.id);
	};

	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<div className="adviceContainer">
			<h1>ADVICE #{adviceNum}</h1>
			<p>“{advice}”</p>

			<div className="patternDivider"></div>
			<div className="diceContainer" onClick={fetchAdvice}>
				<img className="dice" src={dice} alt="" />
			</div>
		</div>
	);
};

export default Advice;
