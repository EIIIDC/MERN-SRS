import '../App.css';

const Login = () => {
    return (
        
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </form>
        </div>
    );

}

export default Login;