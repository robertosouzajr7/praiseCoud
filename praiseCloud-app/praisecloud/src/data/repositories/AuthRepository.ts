import { API_URL } from "@env";
import axios from "axios";

export interface loginUser {
  email: string;
  senha: string;
}

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

export interface loginResponse {
  token: string;
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

export const AuthRepository = {
  login: async (email: string, senha: string): Promise<loginResponse> => {
    const response = await axios.post(`${API_URL}/login`, { email, senha });
    return response.data;
  },

  singUpGroup: async (newGrupo: singUpGroup): Promise<newGroupCreated> => {
    const response = await axios.post(`${API_URL}/grupo`, newGrupo);
    return response.data;
  },

  singUpMember: async (newMember: SignUpMember): Promise<newMemberCreated> => {
    const response = await axios.post(`${API_URL}/membro`, newMember);
    return response.data;
  },
};
