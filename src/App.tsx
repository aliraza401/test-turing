import { Provider, useDispatch } from 'react-redux';
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@emotion/react";
import { Toaster } from "react-hot-toast";
import { toastOption } from "./constants/ToasterOptions";

import { CssBaseline } from "@mui/material";
import { theme } from "./styles/MuiTheme";
import "./styles/index.scss";
import 'remixicon/fonts/remixicon.css';

import { Loader } from "./pages/Loader";
import { Router } from './router';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
          <Toaster {...toastOption} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
