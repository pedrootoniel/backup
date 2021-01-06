import React from 'react'
import Global from './global'
import Routes from './routes';
import AuthProvider from './hooks/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Global />
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App
