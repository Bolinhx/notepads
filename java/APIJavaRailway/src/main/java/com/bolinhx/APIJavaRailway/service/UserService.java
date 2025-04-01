package com.bolinhx.APIJavaRailway.service;

import com.bolinhx.APIJavaRailway.domain.model.User;

public interface UserService {
    User findById(Long id);

    User create(User userToCreate);
}
