import Routes from "./routes";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import Gaps from "./styles/settings/gaps";
import Elements from "./styles/base/elements";
import Reset from "./styles/generic/reset";
import Animations from "./styles/settings/animations";

const App = () => {
  return (
    <>
      <Gaps />
      <Animations />
      <Elements />
      <Reset />

      <Routes />
    </>
  );
};

export default App;
