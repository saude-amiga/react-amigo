export type LoginFormData = {
  email: string;
  senha: string;
};

export type Usuario = {
  token: string;
  email: string;
  senha: string;
  funcionario: boolean;
};
