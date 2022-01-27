import './styles/css/App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Body from './components/body/Body';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
};

export default App;
