import {
  AuthRepository,
  SignUpMember,
  loginResponse,
  loginUser,
  newGroupCreated,
  newMemberCreated,
  singUpGroup,
} from "../../data/repositories/AuthRepository";

import { Group } from "../entities/Group";
import { Member } from "../entities/Member";
import { TokenUser } from "../entities/TokenUser";

export const AuthCase = {
  login: async (email: string, senha: string): Promise<TokenUser> => {
    const tokenUser = await AuthRepository.login(email, senha);
    return new TokenUser(tokenUser.token);
  },

  signUpGroup: async (data: singUpGroup): Promise<Group> => {
    const {
      id,
      nome,
      email,
      telefone,
      senha,
      isAdmin,
      ImgPerfil,
      createdAt,
      updatedAt,
    } = await AuthRepository.singUpGroup(data);
    return new Group(
      id,
      nome,
      email,
      telefone,
      senha,
      isAdmin,
      ImgPerfil,
      createdAt,
      updatedAt
    );
  },

  singUpMember: async (data: SignUpMember): Promise<Member> => {
    const {
      id,
      nome,
      email,
      telefone,
      senha,
      imgPerfil,
      nascimento,
      nipe,
      cargo,
      isAdmin,
      grupoId,
      createdAt,
      updatedAt,
    } = await AuthRepository.singUpMember(data);

    return new Member(
      id,
      nome,
      email,
      telefone,
      senha,
      imgPerfil,
      nascimento,
      nipe,
      cargo,
      isAdmin,
      grupoId,
      createdAt,
      updatedAt
    );
  },
};
