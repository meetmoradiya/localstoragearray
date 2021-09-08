import React from "react";

const PopUp = (props) => {
	const [question, setQuestion] = React.useState("");
	const [answer, setAnswer] = React.useState("");
    const [userdata , setUserData]=React.useState()
	// const data = JSON.parse({
	// 	question:JSON.stringify(question),
	// 	answer:JSON.stringify(answer),
	// });
    // console.log(data)
    const data  = 
        {
            question:question,
            answer:answer
        }
        console.log(data)
  
	const handleSubmit = (e) => {
		e.preventDefault()
        setUserData(data)
        var a =[userdata]
        a=JSON.parse(localStorage.getItem("session")) ||[];
        a.push(data);
        localStorage.setItem("session" , JSON.stringify(a));
        props.close()
    };

    
	return (
		<div className="fixed top-1/2 left-1/2 bg-white shadow-2xl w-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<form className="flex w-full flex-wrap space-y-2 p-5" onSubmit={handleSubmit}>
				<div className="space-y-5 w-full">
                    <div className="flex justify-end">

                    <button className="px-5 py-3 bg-purple-800 text-purple-100 text-right " onClick={()=>{props.close()}}>X</button>
                    </div>
					<input
						className="bg-gray-200 w-full py-2 outline-none px-2 text-xl rounded-tr-lg rounded-bl-lg rounded-tl-lg text-purple-800 placeholder-purple-300 tracking-widest"
						type="text"
						name=""
						id=""
						placeholder="please enter the question"
						onChange={(e) => {
							setQuestion(e.target.value);
						}}
					/>
					<input
						className="bg-gray-200 w-full py-2 outline-none px-2 text-xl rounded-tr-lg rounded-bl-lg rounded-tl-lg text-purple-800 placeholder-purple-300 tracking-widest"
						type="text"
						name=""
						id=""
						placeholder="please enter the answer"
						onChange={(e) => {
							setAnswer(e.target.value);
						}}
					/>
				<button className="bg-purple-800 text-purple-100 px-10 py-3 rounded-tr-lg rounded-bl-lg rounded-tl-lg">
					Submit
				</button>
				</div>
			</form>
		</div>
	);
};

export default PopUp;
