import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SingleQuestion from "./components/SingleQuestion";
import * as sessionActions from "./store/session";
import ErrorPage from "./components/ErrorPage";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const restore = async () =>
            await dispatch(sessionActions.restoreUser());
        setIsLoaded(true);

        restore();
    }, [dispatch]);

    return (
        isLoaded && (
            <div className="super-container">
                <Navigation isLoaded={isLoaded} />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/api/questions/:questionId">
                        <SingleQuestion />
                    </Route>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
                <div id="info-button">
                    <i className="fa-solid fa-circle-info"></i>
                </div>
            </div>
        )
    );
}

export default App;
