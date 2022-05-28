import React from "react";
import { LogBox } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Route from "./src/navigation";
import { store, persistor } from "./src/redux/store";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Route />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
