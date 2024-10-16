export class Group {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public telefone: string,
    public senha: string,
    public isAdmin: boolean,
    public ImgPerfil: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
