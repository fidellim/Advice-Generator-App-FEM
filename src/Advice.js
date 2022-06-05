import { useEffect, useState } from "react";

const Advice = () => {
	const [advice, setAdvice] = useState("");
	const [adviceNum, setAdviceNum] = useState(0);

	useEffect(() => {
		const fetchAdvice = async () => {
			const res = await fetch("https://api.adviceslip.com/advice");
			const data = await res.json();
			setAdvice(data.slip.advice);
			setAdviceNum(data.slip.id);
		};

		fetchAdvice();
	}, []);

	return (
		<div>
			<h1>ADVICE #{adviceNum}</h1>
			<p>{advice}</p>
		</div>
	);
};

export default Advice;
