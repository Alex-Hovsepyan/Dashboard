function SignUpForm () {
    return (
        <form className="signUp-form">
            <h2>Register with</h2>
            <p>or</p>
            <div className="input-div">
                <label htmlFor="1">Name</label>
                <input 
                    id="1"
                    type='text'
                    placeholder="name"
                />
            </div>
            <div className="input-div">
                <label htmlFor="2">
                    Email
                </label>
                <input 
                    id="2"
                    type='email'
                    placeholder="email"
                />
            </div>
            <div className="input-div">
                <label htmlFor="3">Password</label>
                <input 
                    id="3"
                    type='password'
                    placeholder="passwor"
                />
            </div>
        </form>
    );
}

export default SignUpForm;