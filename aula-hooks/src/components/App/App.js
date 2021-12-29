import './App.css';

import Counter from '../Counter/Counter';
import SmartCounter from '../SmartCounter/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter</h2>
      <Counter />
      <h2>SmartCounter</h2>
      <SmartCounter />
      <h2>Ifood Counter</h2>
      <IfoodCounter />
    </>
  );
}

export default App;
