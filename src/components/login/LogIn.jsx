import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function LogIn() {

    const [errors, setErrors] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const emailField = e.target.email.value;
        const passwordField = e.target.password.value;
        const termsChecked = e.target.terms.checked;
        console.log(emailField);
        console.log(passwordField);
        console.log(termsChecked);

        setErrors('');

        signInWithEmailAndPassword(auth, emailField, passwordField)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            setErrors(error);
        })

    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <div>
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label className="ml-1" htmlFor="terms">Accept our <a className="" href="">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className="text-sm">Didn't create an acoount yet? Please <Link to="/signup" className="text-blue-600 underline font-semibold">Sign Up</Link> or <Link className="text-blue-600 underline font-semibold" to="/signup2">Sign Up With ContextAPI</Link> </p>
                            </div>
                            {
                                errors && <p className="text-red-600">Please enter your Email or Password correctly</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}