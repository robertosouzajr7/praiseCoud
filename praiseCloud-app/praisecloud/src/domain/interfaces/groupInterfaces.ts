export interface singUpGroup {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  isAdmin: boolean;
  ImgPerfil: string;
  membros: [];
}
export interface newGroupCreated {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  isAdmin: boolean;
  ImgPerfil: string;
  createdAt: Date;
  updatedAt: Date;
}
