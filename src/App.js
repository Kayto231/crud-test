import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ControllComponent from "./components/ControllComponent/ControllComponent";
import { apiRequestFunction } from "./redux/actions/apiActions";
import "./index.scss";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRequestFunction());
  }, []);

  return (
    <div className="wrapper">
      <ControllComponent />
    </div>
  );
}

export default App;
