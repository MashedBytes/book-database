import { Layout } from 'antd';
import { Authors } from './components/authors/Authors';
import { AuthorForm } from './components/authors/AuthorForm';

import './App.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    // <Authors />
    <AuthorForm />
  );
}

export default App;
