package com.codelab.todo.service;

import com.codelab.todo.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);
}
