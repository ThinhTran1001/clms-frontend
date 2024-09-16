import React from 'react';
import  Layout  from './components/layout/Layout';
import LandingPage from './features/landing_page/LandingPage';


function App() {
  return (
    <div className="App">
      <Layout>
        <LandingPage />
    </Layout>
    </div>
  );
}

export default App;
