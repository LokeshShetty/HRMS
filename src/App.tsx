import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Layout from "./pages/Layout";
import * as styled from "./appStyles";

function App() {
  return (
    <>
      <styled.MainDiv>
        <Layout />
      </styled.MainDiv>
      <TanStackRouterDevtools />
    </>
  );
}

export default App;
