import './App.css';
import AtendimentoForm from './components/AtendimentoForm/AtendimentoForm';
import AtendimentoList from './components/AtendimentoList/AtendimentoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Registro de Atendimentos</h1>
      </header>
      <div className="App-content">
        <AtendimentoForm />
        <AtendimentoList />
      </div>
    </div>
  );
}

export default App;
