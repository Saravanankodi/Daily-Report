export type Role = 'user' | 'admin';

export interface User {
  id: string;
  email: string;
  role: Role;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}
export interface JwtPayload {
  id: string;
  email: string;
  role: 'admin' | 'user';
}