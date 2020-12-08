import Routes from "./routes";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import Gaps from "./styles/settings/gaps";
import Elements from "./styles/base/elements";
import Reset from "./styles/generic/reset";

const App = () => {
  return (
    <>
      <Gaps />
      <Elements />
      <Reset />

      <Routes />
    </>
  );
};

export default App;
