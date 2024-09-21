"use client";

import React, { useState, useEffect } from "react";

import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function Home(){
	const [todos, setTodos] = useState([]);
	const [todoInput, setTodoInput] = useState([])
	
	const handleAdd = () => {
		setTodos([...todos, todoInput]);
		console.log(todos);
		setTodoInput("");
	};

	const handleEdit = (index) => {
		var todoToDelete = todos.filter((todo, todoIndex) => index === todoIndex);
		setTodoInput(todoToDelete);
		handleDelete(index);
	};

	const handleDelete = (index) => {
		var newTodos = todos.filter((todo, todoIndex) => index !== todoIndex);
		setTodos(newTodos);
	};

	return (
	<React.StrictMode>
		<TodoInput todoInput={todoInput} setTodoInput={setTodoInput} handleAdd={handleAdd}/>
		<TodoList setTodoInput={setTodoInput} todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>
	</React.StrictMode>
	);
}
