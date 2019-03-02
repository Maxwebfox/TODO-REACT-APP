import React from 'react';
import TodoListItem from '../todo-list-item'
import './todo-list.css';


// Используя деструктуризацию, не лезем в объект props, 
// а сразу же достаем из него свойство todos
const TodoList = ( { todos, onDeleted, onToggleDone, onToggleImportant } ) => {
	// Создаем для каждого элемента массива todos один JSX элемент 
	const elements = todos.map((item) => {
		// Используем деструктуризацию для того, что бы не передавать свойство id для TodoListItem,
		// туда мы передаем все остальные свойства item, которые не были деструктурированы (itemProps)
		const {id, ...itemProps} = item

 		return (
			<li key={id} className="list-group-item">
				{/* Тут мы берем каждое свойство из объекта Item 
				и передать его в качестве атрибута вместе со значением в todoListItem */}
				{/* И так как у нас свойство элемента совпадает по названию с элементами массива
				мы можем использовать spread оператор, который возвращает коллекцию ключей и их значений */}
				<TodoListItem 
					{ ... itemProps }
					onDeleted={ () => onDeleted(id) }
					onToggleDone={ () => onToggleDone(id) }
					onToggleImportant={ () => onToggleImportant(id) }/>
			</li>
		);
	})

	return (
		<ul className="list-group todo-list" >
			{ elements }
		</ul>
	);
};

export default TodoList;