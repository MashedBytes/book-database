import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Nav } from "./components/layout/Nav";
import { Authors } from './components/authors/Authors';
import { AuthorForm } from './components/authors/AuthorForm';
import { Topics } from './components/topics/Topics';
import { TopicForm } from './components/topics/TopicForm';
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

              <Route path="/authors/:id/edit">
                <AuthorForm />
              </Route>
              <Route path="/authors/new">
                <AuthorForm />
              </Route>
              <Route path="/authors">
                <Authors />
              </Route>

              <Route path="/topics/:id/edit">
                <TopicForm />
              </Route>
              <Route path="/topics/new">
                <TopicForm />
              </Route>
              <Route path="/topics">
                <Topics />
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
