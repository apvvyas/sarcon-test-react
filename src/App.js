import React, { useEffect } from 'react';
import Modules from './modules/index';

import { useDispatch } from 'react-redux';

function App(){

  const dispatch = useDispatch();


  return (
      <div className="App">
        <Modules />
      </div>
  );

}

export default App;
