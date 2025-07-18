export interface AuthState {
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated?: boolean;
}

export type User = {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
};
