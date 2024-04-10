package com.codelab.todo.controller;

import com.codelab.todo.dto.TodoDto;
import com.codelab.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    //Build ADD-TODO Rest Api
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto) {
        TodoDto savedTodo = todoService.addTodo(todoDto);
        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }

    //Build GET-TODO Rest Api
    @GetMapping("/{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable Long id) {
        TodoDto todoDto = todoService.getTodo(id);
        return new ResponseEntity<>(todoDto, HttpStatus.OK);
    }

    //Build GET-ALL-TODO Rest Api
    @GetMapping
    public ResponseEntity<List<TodoDto>> getAllTodos(){
        List<TodoDto> listTodos = todoService.getAllTodo();
        return new ResponseEntity<>(listTodos, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<TodoDto> updateTodo(@PathVariable Long id, @RequestBody TodoDto todoDto){
        TodoDto modifiedTodo = todoService.updateTodo(id, todoDto);
        return new ResponseEntity<>(modifiedTodo, HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long id){
        todoService.deleteTodo(id);
        return new ResponseEntity<>("Todo Deleted for ID: " + id, HttpStatus.OK);
    }

    @PatchMapping("/{id}/complete")
    public ResponseEntity<TodoDto> todoCompleted(@PathVariable Long id){
        TodoDto todoCompleted = todoService.todoComplete(id);
        return new ResponseEntity<>(todoCompleted, HttpStatus.OK);
    }

    @PatchMapping("/{id}/incomplete")
    public ResponseEntity<TodoDto> todoInCompleted(@PathVariable Long id){
        TodoDto todoInCompleted = todoService.todoInComplete(id);
        return new ResponseEntity<>(todoInCompleted, HttpStatus.OK);
    }
}
