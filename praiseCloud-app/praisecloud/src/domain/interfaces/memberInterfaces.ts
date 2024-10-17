export interface SignUpMember {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  imgPerfil: string;
  nascimento: Date;
  nipe: string;
  cargo: string;
  isAdmin: true;
  grupoId: string;
}
export interface newMemberCreated {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  imgPerfil: string;
  nascimento: Date;
  nipe: string;
  cargo: string;
  isAdmin: true;
  grupoId: string;
  createdAt: Date;
  updatedAt: Date;
}
