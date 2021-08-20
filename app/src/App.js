import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { CenterRow } from "./components/layout/CenterRow";
import { Nav } from "./components/layout/Nav";
import { Authors } from './components/authors/Authors';
import { AuthorForm } from './components/authors/AuthorForm';
import { Home } from "./components/home/Home";
import { Row, Col } from 'antd';


import './App.css';


function App() {

  return (
    <>
      <Router>
        <Nav />

        <Row justify={"center"} align={"middle"} style={{ minHeight: '100vh' }}>
          
          <Col span={16}>
          </Col>

          <Col span={16}>
            <Switch>
              <Route path="/authors">
                <Authors />
              </Route>
              <Route path="/authors/:id">
                <AuthorForm />
              </Route>
              <Route path="/authors/new">
                <AuthorForm />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Col>

          <Col span={16}>
          </Col>

        </Row>
      </Router>
    </>
  );
}

export default App;
