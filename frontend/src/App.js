import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import LoginForm from "./components/LoginFormModal/LoginForm";
import * as sessionActions from "./store/session";

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
                {/* <Header /> */}
                <Navigation isLoaded={isLoaded} />
                <Switch>
                    <Route exact path="/"></Route>
                    <Route path="/login">
                        <LoginForm />
                    </Route>
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                </Switch>
            </div>
        )
    );
}

export default App;
