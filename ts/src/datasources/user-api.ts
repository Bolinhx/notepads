
export interface UserFromDB{
    id: string;
    name: string;
    email: string | null;
}


const mockUsers: UserFromDB[] = [
  { id: '1', name: 'Alice', email: 'alice@example.com' },
  { id: '2', name: 'Bob', email: null },
  { id: '3', name: 'Charlie', email: 'charlie@example.com' },
];

export class UserAPI {
    async getUsers(): Promise<UserFromDB[]> {
        console.log('[UserAPI] Buscando todos os usuários...');

        await new Promise(resolve => setTimeout(resolve,50));
        return mockUsers;
    }

    async getUserById(id: string): Promise<UserFromDB | null>{
        console.log(`[UserAPI] Buscando usuário com id: ${id}`);

        const user = mockUsers.find(u => u.id === id);
        return user || null;
    }
};