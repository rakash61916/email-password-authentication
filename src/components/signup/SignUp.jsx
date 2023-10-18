//read all comments carefully

import { useState } from "react";
import auth from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth"; /* createUserWithEmailAndPassword use kora hoise krn amra new user banabo. log in er jonne abr alada jinish ase. go to log in page*/
import { Link } from "react-router-dom";

export default function SignUp() {
    
    //eki id dui bar log in korle error message dekhanor jonne ekta state use kra lgbe
    const [errors, setError] = useState('');
    
    //successfull vabe log in hoile ekta success message dekhanor jonne ekta state use kra lgbe
    const [successful, setSuccessful] = useState('')
    
    //state for show password
    const [showPass, setPass] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const emailField = e.target.email.value;
        const passwordField = e.target.password.value;
        const termsChecked = e.target.terms.checked;
        console.log(emailField);
        console.log(passwordField);
        console.log(termsChecked);


        //sucessful r error message reset korar jonne
        setSuccessful('')
        setError('')

        //password 6 character er beshi hoite hobe nyle login hobe na. r ekta error msg dibe, shetar jonne e conditional operator (if / else if / else) use kora lgbe. r eita uporer reset er niche dite hobe naile ei msg ta theke jabe
        if (passwordField.length < 6) {
            setError('Password must be at least 6 characters or longer');
            return;
        }
        /* eikhne exclamatory sign(!) dite hoise krn ei condition ta kebol false hoilei error msg ta dekhabe */
        /*else if (!/[A-Z]/.test(passwordField)) {
            setError('Your password should have any UpperCase');
            return;
        }
        else if (!/[!@#$%^&*()_+-/|:"';]/.test(passwordField)) {
            setError('Your password should have any Special Character(!@#$%^&*()_+-/|:";)');
            return;
        }*/
        //ei duita else if er conditions k ek shathe likhar jonne /^(?=.*[something..])(?=.*[something..])/ er vitore likha lge
        else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+-/|:"';])/.test(passwordField)) {
            setError('Your password should have any UpperCase and Special Character like :- (!@#$%^&*()_+-/|:";)');
            return;
        }
        else if (!termsChecked) {
            setError('Please accept terms and conditions');
            return;
        }


        createUserWithEmailAndPassword(auth, emailField, passwordField)
            .then(result => {
                console.log(result.user);
                setSuccessful('Your are successfully Logged in');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
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
                                <input
                                    type={showPass ? "text" : "password"} /* pass dekhanor jonne condition krte hobe krn amra show pass a click krle pass dekhabe nyle dekhabe na. er jonne ekta state use krte hobe. state ta false hobe krn nrmlly dekhabe na. dekhanor jonne oita true hoite hoibe. tai true hoile type: "true"; hobe r false hoile type: "password hobe" */
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    required />
                                <span onClick={() => setPass(!showPass)}>Show Pass</span> {/* showPass true krsi krn nrmlly to false thakbe. ty eikhne click krlei ei arrow function mane state er value ta ture hobe r pass ta dekhabe. */}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-1" htmlFor="terms">Accept our <a className="" href="">Terms and Conditions</a></label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div>
                                <p className="text-sm">Already have Account? Click Here to <Link to="/login" className="text-blue-600 underline font-semibold">Log In</Link> </p>
                            </div>
                            {
                                successful && <p className="text-green-600">{successful}</p>
                            }
                            {
                                errors && <p className="text-red-600">{errors}</p>
                            }

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}