import { AuthRepository } from "../../data/repositories/AuthRepository";
import {
  SignUpMember,
  loginResponse,
  singUpGroup,
} from "../interfaces/index.Interfaces";
import { Group } from "../entities/Group";
import { Member } from "../entities/Member";
import { TokenUser } from "../entities/TokenUser";

//Auth case
export const AuthCase = {
  login: async (data: loginResponse): Promise<TokenUser> => {
    const tokenUser = await AuthRepository.login(data);
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
