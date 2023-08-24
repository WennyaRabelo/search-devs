export interface IUser {
  name: string;
  avatar_url: string;
  login: string;
  bio?: string; 
  followers: number; // seguidores
  following: number;
  company?: string;
  location: string;
  email?: string;
  blog?: string;
  twitter_username?: string;
}