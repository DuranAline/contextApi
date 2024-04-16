// src/components/Footer.tsx
import { useContext } from "react";
import { UserContext } from "../../context/user";

export function Footer() {
    const { qtdAlunos } = useContext(UserContext);

    return (
        <footer>
            Total de Alunos: {qtdAlunos}
        </footer>
    );
}
