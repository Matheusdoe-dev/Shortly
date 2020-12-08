import { BrowserRouter, Switch, Route } from "react-router-dom";
// routes
import Index from "./pages/Index";

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route to="/" exact component={Index} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;