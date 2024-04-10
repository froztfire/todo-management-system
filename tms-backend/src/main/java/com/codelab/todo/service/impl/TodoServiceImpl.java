package com.codelab.todo.service.impl;

import com.codelab.todo.dto.TodoDto;
import com.codelab.todo.entity.Todo;
import com.codelab.todo.exception.ResourceNotFoundException;
import com.codelab.todo.repository.TodoRepository;
import com.codelab.todo.service.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoServiceImpl implements TodoService {
    @Autowired
    private TodoRepository todoRepository;
    @Autowired
    private ModelMapper modelMapper;

    //ADD TODO
    @Override
    public TodoDto addTodo(TodoDto todoDto) {
 /*       Convert todoDto to JPA Entity
        Todo todo = new Todo();
        todo.setId(todoDto.getId());
        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setCompleted(todoDto.isCompleted());
*/
        //Convert todoDto to JPA Entity using ModelMapper
        Todo todo = modelMapper.map(todoDto, Todo.class);
        //Saved the converted object to Entity
        Todo savedTodo = todoRepository.save(todo);
/*        Convert the savedTodo to DTO
        TodoDto savedTodoDto = new TodoDto();
        savedTodoDto.setId(savedTodo.getId());
        savedTodoDto.setTitle(savedTodo.getTitle());
        savedTodoDto.setDescription(savedTodo.getDescription());
        savedTodoDto.setCompleted(savedTodo.isCompleted());
*/
        //Convert JPA Entity to DTO using ModelMapper
        TodoDto savedTodoDto = modelMapper.map(savedTodo, TodoDto.class);
        return savedTodoDto;
    }

    //GET TODO BY ID
    @Override
    public TodoDto getTodo(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Resource not found for the given ID: " + id)
        );
        return modelMapper.map(todo, TodoDto.class);
    }

    //GET ALL TODOS
    @Override
    public List<TodoDto> getAllTodo() {
        List<Todo> todos = todoRepository.findAll();
        return todos.stream().map(
                (todo) ->  modelMapper.map(todo, TodoDto.class)
        ).collect(Collectors.toList());
    }

    //UPDATE ALL TODO
    @Override
    public TodoDto updateTodo(Long id, TodoDto todoDtoUpdated) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Resource not found for the given ID: " + id)
        );
        todo.setTitle(todoDtoUpdated.getTitle());
        todo.setDescription(todoDtoUpdated.getDescription());
        todo.setCompleted(todoDtoUpdated.isCompleted());
        Todo savedTodo = todoRepository.save(todo);
        return modelMapper.map(savedTodo, TodoDto.class);
    }

    @Override
    public void deleteTodo(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Resource not found for the given ID: " + id)
        );
        todoRepository.delete(todo);
    }

    @Override
    public TodoDto todoComplete(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Resource not found for the given ID: " + id)
        );
        todo.setCompleted(Boolean.TRUE);
        todoRepository.save(todo);
        return modelMapper.map(todo, TodoDto.class);
    }

    @Override
    public TodoDto todoInComplete(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Resource not found for the given ID: " + id)
        );
        todo.setCompleted(Boolean.FALSE);
        todoRepository.save(todo);
        return modelMapper.map(todo, TodoDto.class);
    }


}
