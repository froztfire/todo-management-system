package com.codelab.todo.service;

import com.codelab.todo.dto.TodoDto;
import com.codelab.todo.entity.Todo;

import java.util.List;

public interface TodoService {

    TodoDto addTodo(TodoDto todoDto);

    TodoDto getTodo(Long id);

    List<TodoDto> getAllTodo();

    TodoDto updateTodo(Long id, TodoDto todoDto);

    void deleteTodo(Long id);

    TodoDto todoComplete(Long id);

    TodoDto todoInComplete(Long id);
}
