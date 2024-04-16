// src/components/AlunoForm.tsx
import { useState, useContext, FormEvent } from "react";
import { UserContext } from "../../context/user";

export function AlunoForm() {
    const [nome, setNome] = useState("");
    const { adicionarAluno } = useContext(UserContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (nome.trim()) {
            adicionarAluno(nome);
            setNome("");  // Limpa o campo após adicionar
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome do aluno"
            />
            <button type="submit">Adicionar Aluno</button>
        </form>
    );
}
