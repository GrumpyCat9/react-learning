import { useState } from 'react';

import './App.css';
import Postlist from './Components/PostList';
import MainHeader from './Components/MainHeader';

function App() {

  const [modalVisible, setModalVisibile] = useState(true);

  function hideModalHandler() {
    setModalVisibile(false);
  }

  function showModalHandler(){
    setModalVisibile(true)
  }

  return (
    <>
      <MainHeader onCreatePost={hideModalHandler}/>
      <main>
        <Postlist isPosting={modalVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  );
}

export default App;
