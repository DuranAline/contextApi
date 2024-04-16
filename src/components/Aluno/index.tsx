// src/components/Aluno.tsx
import { useContext } from "react";
import { UserContext } from "../../context/user";

export function Aluno() {
    const { alunos } = useContext(UserContext);

    return (
        <div>
            {alunos.length > 0 ? (
                <span>Último aluno cadastrado: {alunos[alunos.length - 1]}</span>
            ) : (
                <span>Nenhum aluno cadastrado.</span>
            )}
        </div>
    );
}
