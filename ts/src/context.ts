import { type UserAPI } from './datasources/user-api.js';
import { type PostAPI } from './datasources/post-api.js';

export interface MyContext{
    dataSources: {
        userAPI: UserAPI;
        postAPI: PostAPI;
    };
}