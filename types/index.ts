
export interface UserProfile {
  uid: string;
  username: string;
  email: string;
  displayName: string;
  role: 'admin' | 'user';
  base: string;
  status: 'ATIVO' | 'INATIVO';
}

export interface SystemSettings {
  nome: string;
  paleta: 'gol' | 'dark' | 'light';
  corPrimaria: string;
  corSecundaria: string;
}

export interface AppState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  loading: boolean;
  setUser: (user: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
}
