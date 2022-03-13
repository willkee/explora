import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./SignUpForm.css";

const SignupForm = ({ setShowSignupModal }) => {
    const dispatch = useDispatch();
    // const sessionUser = useSelector((state) => state.session.user);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidationErrors([]);

        try {
            if (password === confirmPassword) {
                await dispatch(
                    sessionActions.signupUser({
                        username,
                        email,
                        password,
                    })
                );
            }

            return setValidationErrors([
                "Confirm password must match your password.",
            ]);
        } catch (err) {
            const data = await err.json();
            data && data.errors && setValidationErrors(data.errors);
        }
    };

    let uniqueErrors;
    if (validationErrors.length > 0) {
        uniqueErrors = validationErrors.filter((error) => {
            const lcError = error.toLowerCase();
            return lcError !== "invalid value";
        });
    } else {
        uniqueErrors = [];
    }

    return (
        isLoaded && (
            <div className="signup-form-container">
                <h1>Sign Up</h1>
                <ul
                    className={
                        validationErrors.length > 0
                            ? "errors-container"
                            : "hidden-error-container"
                    }
                >
                    {uniqueErrors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
                <form className="signup-form-element" onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    ></input>
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    ></input>
                    <label className="form-label" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    ></input>
                    <label className="form-label" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        autoComplete="off"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    ></input>
                    <div className="sign-up-button-container">
                        <button>Sign Up</button>
                        <button
                            type="button"
                            onClick={() => setShowSignupModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    );
};

export default SignupForm;
