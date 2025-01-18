import "./App.css";
import Routes from "./config/routes/router";
import "@mantine/core/styles.css"

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider>
        <Routes />
      </MantineProvider>
    </>
  );
}

export default App;
