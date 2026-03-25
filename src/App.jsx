import React from 'react';
import { useEffect } from 'react';
import { createStore } from 'idb';

const App = () => {
  useEffect(() => {
    // IndexedDB initialization
    const initDB = async () => {
      const db = await createStore('my-database', 'my-store');
      console.log('IndexedDB initialized:', db);
    };
    initDB();
  }, []);

  return (
    <div>
      <h1>My Application</h1>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Journal</li>
          <li>IdeaShare</li>
        </ul>
      </nav>
    </div>
  );
};

export default App;