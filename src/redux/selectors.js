import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
	todoListSelector,
	filterStatusSelector,
	searchTextSelector,
	filterPrioritySelector,
	(todoList, status, searchText, priorities) => {
		return todoList.filter((todo) => {
			if (status === "All") {
				return priorities.length
					? todo.name
							.toLowerCase()
							.includes(searchText.toLowerCase()) &&
							priorities.includes(todo.priority)
					: todo.name
							.toLowerCase()
							.includes(searchText.toLowerCase());
			}
			return (
				todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
				(status === "Completed" ? todo.completed : !todo.completed) &&
				(priorities.length ? priorities.includes(todo.priority) : true)
			);
		});
	}
);

// reselect
