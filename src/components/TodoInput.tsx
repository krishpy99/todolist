import React, { useState } from "react";


export default function TodoInput(props){
	const handleChange = (e) => {
		props.setTodoInput(e.target.value);
	};

	return (
		<div>
			<input name="" placeholder="enter task" onChange={handleChange} value={props.todoInput}/>
			<button onClick={props.handleAdd} type="submit">add</button>
		</div>
	);
 }
