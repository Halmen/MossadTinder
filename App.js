import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/store";
import Root from "./screens/Root";
import { PersistGate } from "redux-persist/integration/react";

const stores = configureStore();

const App = () => {
  return (
    <Provider store={stores.store}>
      <PersistGate loading={null} persistor={stores.persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
