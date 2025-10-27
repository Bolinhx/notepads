import { type Post } from "../generated/types.js";

export interface PostFromDB {
    id: string;
    title: string;
    authorId: string;
}

const mockPosts: PostFromDB[] = [
  { id: 'post-1', title: 'GraphQL é Incrível', authorId: '1' },
  { id: 'post-2', title: 'Construindo um Supergraph', authorId: '2' },
  { id: 'post-3', title: 'TypeScript e Módulos ESM', authorId: '1' },
];

export class PostAPI {
    async getPosts(): Promise<PostFromDB[]> {
        console.log('[PostAPI] Buscando todos os posts...');
        return mockPosts
    }

    async getPostById(id: string):Promise<PostFromDB | null>{
        
        console.log(`[PostAPI] Buscando post com id: ${id}`);
        const post = mockPosts.find(p => p.id === id);
        return post || null;
    }

    async getPostsByAuthorId(authorId:string): Promise<PostFromDB[] | null>{
        console.log(`[PostAPI] Buscando posts do autor com id: ${authorId}`);
        return mockPosts.filter(p => p.authorId === authorId);
    }
}