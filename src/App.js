import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from "./Components/Layout/Layout";
import PhotoContainer from "./Containers/PhotoContainer/PhotoContainer";
import { authCheckState } from './store/actions/index'
import './App.css';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authCheckState());
  }, [])
  return (
    <div className="App">
      <Layout>
        <PhotoContainer />
      </Layout>
    </div>
  );
}

export default App;
