import './App.css';
import Paragraph from './components/paragraph/paragraph'
import Button from './components/button/button';
function App() {
  return (
    <>
      <Paragraph label="texto específico" color='purple' />
      <Paragraph />
      <Paragraph />
      <Button label='Baixar CV' />
    </>
    
  );
}

export default App;
