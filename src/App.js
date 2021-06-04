import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Wrapper from './page/wrapper/view/Wrapper';
import CustomSnackbar from './shared/components/CustomSnackbar';


function App() {
 

  return (
    <div>
      <CssBaseline />
      <Wrapper/>
      <CustomSnackbar/>
    </div>
  );
}



export default App;