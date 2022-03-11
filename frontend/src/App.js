import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SingleQuestion from "./components/SingleQuestion";
import * as sessionActions from "./store/session";
import ErrorPage from "./components/ErrorPage";
import InfoButton from "./components/InfoButton";

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
                    <Route path="/questions/:questionId">
                        <SingleQuestion />
                    </Route>
                    <Route>
                        <ErrorPage />
                    </Route>
                </Switch>
                <InfoButton />
                <img
                    className="meme-cat"
                    src="/images/squeezed-cat.jpeg"
                    alt="funny-cat"
                />
            </div>
        )
    );
}

export default App;
