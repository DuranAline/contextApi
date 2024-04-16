// src/components/Nome.tsx
import { useContext } from "react";
import { UserContext } from "../../context/user";

export function Nome() {
    const { alunos } = useContext(UserContext);

    return (
        <div>
            {alunos.length > 0 ? (
                alunos.map((aluno, index) => <div key={index}>Aluno: {aluno}</div>)
            ) : (
                <span>Nenhum aluno cadastrado.</span>
            )}
        </div>
    );
}
