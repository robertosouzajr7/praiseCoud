import { API_URL } from "@env";
import axios from "axios";
import {
  SignUpMember,
  loginResponse,
  newGroupCreated,
  newMemberCreated,
  singUpGroup,
} from "../../domain/interfaces/index.Interfaces";

export const AuthRepository = {
  login: async (data: loginResponse): Promise<loginResponse> => {
    const response = await axios.post(`${API_URL}/login`, { data });
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
