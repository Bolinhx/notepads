import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import path from 'path';
import { resolvers } from './resolvers.js';
import { fileURLToPath } from 'url';
import { error } from 'console';
import { UserAPI } from './datasources/user-api.js';
import { PostAPI } from './datasources/post-api.js';
import { type MyContext } from './context.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



async function startServer() {
    const typeDefs = readFileSync(path.resolve(__dirname, './schema.graphql'), {
        encoding: 'utf-8',
    });

    const server = new ApolloServer<MyContext>({
        typeDefs,
        resolvers,
    });

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
      return {
  
        dataSources: {
          userAPI: new UserAPI(),
          postAPI: new PostAPI(),

        },
      };
    },

    });

    console.log(`🚀 Servidor pronto em: ${url}`)
}

startServer().catch((error)=> {
    console.error('Falha ao iniciar o servidor:', error)
});