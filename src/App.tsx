// src/App.tsx
import './App.css';
import { Nome } from './components/Nome';
import { Aluno } from './components/Aluno';
import { AlunoForm } from './components/AlunoForm';
import { UserProvider } from './context/user';
import { Footer } from './components/Footer';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Minha Página</h1>
        <hr />
        <AlunoForm />
        <Aluno />
        <Nome />
      
        <Footer/>
      </div>

    </UserProvider>
  );
  console.log('aqui')
}

export default App;
