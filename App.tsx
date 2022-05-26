import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import Route from "./src/navigation";

const App = () => {
  return (
    <PaperProvider>
      <Route />
    </PaperProvider>
  );
};

export default App;
