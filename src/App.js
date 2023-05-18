import './App.css';
import Main from './Main';
import Counter from './components/Counter';
import LoginTest from './components/LoginTest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


function App() {

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/logintest' element={<LoginTest />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
