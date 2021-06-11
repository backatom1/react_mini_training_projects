import React from 'react';

import UseStateBlock from './components/UseState/UseStateBlock';
import NumberUseEffect from './components/UseEffect/NumberUseEffect';

function App() {

  const [visibleUseStateBlock, setVisibleUseState] = React.useState(true);
  const [visibleUseEffectBlock, setVisibleUseEffect] = React.useState(true);

  const togglevisibleUseStateBlock = () => {
    setVisibleUseState((visible) => !visible);
  };

  const togglevisibleUseEffectBlock = () => {
    setVisibleUseEffect((visible) => !visible);
  };

  return (
    <div>
      <div className='margin-top component-border'>
        {visibleUseStateBlock && <UseStateBlock />}
        <button onClick={togglevisibleUseStateBlock} >Показать/скрыть useStateBlock</button>
      </div>

      <div className='margin-top component-border'>
        {visibleUseEffectBlock && <NumberUseEffect />}
        <button onClick={togglevisibleUseEffectBlock} >Показать/скрыть UseEffectBlock</button>
      </div>
    </div>
  );
}

export default App;
