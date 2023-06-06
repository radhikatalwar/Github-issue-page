import { Provider } from "react-redux";
import "./App.css";
import Loader from "./components/loader/loader";
import { store } from "./redux/store";
import RoutesManager from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Loader />
      <RoutesManager />
    </Provider>
  );
}

export default App;
