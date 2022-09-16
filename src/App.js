import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./Components/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
