import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {
  
  // Такой синтаксис на данный момент является частью стандарта

  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`Done: ${this.props.label}`)
  //   }
  // }
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false
  //   };
  // }

// Данный синтаксис не явялется частью стандарта, выше консервативный синтаксис
  // state = {
	// done: false,
	// important: false
  // };

  // на самом объекте, а не на прототипе создаем функцию 
  // и поскольку это функция стрелка она сохраняет значение this
  // Такой способ описания функции еще не является частью стандарта, а только proposel
  // onLabelClick = () => {
  //     this.setState(({done}) => {
	// 	  return {
	// 		  done: !done
	// 	  }
	//   })
	// };
	
  // onMarkImportant = () => {
	// this.setState(({important}) => {
	// 	return {
	// 		important: !important
	// 	}
	// })
  // };

  render() {

  const { label, onDeleted, onToggleImportant, onToggleDone,
		  done, important } = this.props;

	let classNames = 'todo-list-item';
	if (done) {
		classNames += ' done';
	}

	if (important) {
		classNames += ' important';
	}
	return (
	  <span className={classNames}>
		<span
		  className="todo-list-item-label"
		  onClick={ onToggleDone }>
		  {label}
		</span>
  
		<button type="button"
				className="btn btn-outline-success btn-sm float-right"
				onClick={ onToggleImportant }>
		  <i className="fa fa-exclamation" />
		</button>
  
		<button type="button"
				className="btn btn-outline-danger btn-sm float-right"
				onClick={ onDeleted }>
		  <i className="fa fa-trash-o" />
		</button>
	  </span>
	);
  };
};