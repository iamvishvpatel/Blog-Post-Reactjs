export interface AuthState {
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated?: boolean;
}

export interface Permission {
  id: number;
  name: string;
  description?: string;
}
export interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
}
export interface Profile {
  id: number;
  bio: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  createdAt: string;
  updatedAt: string;
  profile: Profile;
  role: Role;
}