import { type Resolvers } from './generated/types.js'

export const resolvers: Resolvers = {
    Query: {
        hello: () => {
            return 'Olá, mundo! Refatorado com Data Sources!';
        },

        users : (_parent, _args, context) => {
            return context.dataSources.userAPI.getUsers();
        },

        userById: (_parent, args, context) => {
            return context.dataSources.userAPI.getUserById(args.id);
        },

        posts: (_parent,_args, context) => {
            return context.dataSources.postAPI.getPosts();
        },

        postById: (_parent,args, context) => {
            return context.dataSources.postAPI.getPostById(args.id);
        },
    },

    User: {
        posts: (parent, _args, context) => {
            console.log(`[Resolver User.posts] Buscando posts para User ID: ${parent.id}`);

            return context.dataSources.postAPI.getPostsByAuthorId(parent.id);
        },
    },

    Post: {
        author: (parent, _args, context)=> {


            return context.dataSources.userAPI.getUserById(parent.authorId);
        }
    }

        
};