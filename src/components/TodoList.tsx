function TodoCard(props){
	var todoIndex = props.todoIndex, todo = props.todo;

	const handleEdit = () => {
		props.handleEdit(todoIndex);
	};

	const handleDelete = () => {
		props.handleDelete(todoIndex);
	};
	
	return (
	<li key={todoIndex}>
			<p>{todo}</p>
			<button onClick={handleEdit}>edit</button>
			<button onClick={handleDelete}>delete</button>
	</li>
	);
}

export default function TodoList(props){
	var todos = props.todos;
	return (<ul>
	{todos.map(
		(todo, todoIndex) => 
			<TodoCard todo={todo} todoIndex={todoIndex} handleEdit={props.handleEdit} handleDelete={props.handleDelete}/> 
	)}
	</ul>);
}
