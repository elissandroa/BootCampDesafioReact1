export type PerfilResponse = {
    content: Perfil[];
}

export type Perfil = {
    name:string;
    id:number;
    company: string;
    blog: string;
    location: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    avatar_url: string;
    login: string;
 }