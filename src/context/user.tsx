// user.tsx
import { ReactNode, createContext, useState } from 'react';

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  alunos: string[];
  qtdAlunos: number;
  adicionarAluno: (aluno: string) => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [alunos, setAlunos] = useState<string[]>([]);
  const qtdAlunos = alunos.length;

  function adicionarAluno(aluno: string) {
    setAlunos([...alunos, aluno]);
  }

  return (
    <UserContext.Provider value={{ alunos, qtdAlunos, adicionarAluno }}>
      {children}
    </UserContext.Provider>
  );
}
