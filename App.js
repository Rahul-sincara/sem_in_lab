import React from 'react';
import UserCard from './UserCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
      <UserCard
        name="Rahul Sincara"
        age={20}
        bio="A passionate learner exploring React and AI."
        image="https://via.placeholder.com/100"
      />
      <UserCard
        name="Ananya Sharma"
        age={22}
        bio="Loves building beautiful UIs and designing websites."
        image="https://via.placeholder.com/100"
      />
    </div>
  );
}

export default App;
