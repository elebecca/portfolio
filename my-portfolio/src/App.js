import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Title" scroll>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/projects">Projcets</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
