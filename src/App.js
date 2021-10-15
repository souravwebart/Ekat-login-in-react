import './index.css';

function App() {
  return (
    <div className="main">
      <div className="Login_container">
        <div className="login_box">
          <div className="login__header">
            <div className="login_brand">
              <img src="/img/logo.png" alt="icon"></img>
            </div>
            <div className="login__form">
              <form className="login_form_input">
                <div className="form-group login_form_grp">
                  <img src="/img/mail.png" alt="icon"></img>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                </div>
                <div className="form-group login_form_grp">
                  <img className="password__icon" src="/img/password.png" alt="icon"></img>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div className="password-details">
                  <div className="remember_me">
                    <img src="/img/Vector.png" alt="icon"></img>
                    <p>Remember me</p>
                  </div>
                  <div className="Forgot_password">
                  <p>Forgot password?</p>
                  </div>
                </div>
                <button type="submit" className="button-login">Login</button>
                <div className="signup__details">
                <p>Don’t have an account? <a href="/">Sign up</a> </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
