export class Member {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public telefone: string,
    public senha: string,
    public imgPerfil: string,
    public nascimento: Date,
    public nipe: string,
    public cargo: string,
    public isAdmin: boolean,
    public grupoId: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
