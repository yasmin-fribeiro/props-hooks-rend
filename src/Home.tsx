import { useState, useEffect } from 'react';

function Home() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed]);

  return (
    <div>
      {completed ? (
      <><h1>Tarefa concluída</h1>
      <h3>{tarefa}</h3>
      </>
      ) : (
     
      <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
      )}
    </div>
  );
}

export default Home;