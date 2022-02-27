import React from 'react';
import {useAppSelecor} from "../../Store/Hooks/redux";
import BottomBlock from "../../Containers/BottomBlock/BottomBlock";
import TopBlockContainer from '../../Containers/TopBlockContainer/TobBlockContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <TopBlockContainer/>
        <BottomBlock/>
      </div>
    </div>
  );
}

export default App;
