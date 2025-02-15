import { QueryParamProvider } from "use-query-params";
import { WindowHistoryAdapter } from "use-query-params/adapters/window";
import MyGame from "./MyGame";

function App() {
  return (
    <QueryParamProvider adapter={WindowHistoryAdapter}>
      <MyGame />
    </QueryParamProvider>
  );
}

export default App;
