import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./Context/store";
import Routes from "./Routes";


export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer />
    </Provider>
  );
}