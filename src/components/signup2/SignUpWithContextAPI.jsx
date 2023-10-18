import { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProviderByContext";


export default function SignUpWithContextAPI() {


    const handleSubmit = e => {
        e.preventDefault();
        const emilFld = e.target.email.value;
        const passFld = e.target.password.value;
        const termsChecked = e.target.terms.checked;
        console.log(emilFld, passFld, termsChecked);

        //jehetu userInfo ta ekta object krn context file a amra value te jeita disilm oita object hishabe silo ty eikhne jehetu useContext dia access kora hoise tai eikhneo amra ekta obj pabo r pura object er moddhe jehetu amder just creatUser ta lgbe ty amra full obj k call na kore userInfo obj er ekta property createUser(Function eita) k destructure kore use korbo
        //const userInfo = useContext(UserContext);
        const { createUser } = useContext(UserContext);
        console.log(createUser);

        // create user in firebase
            //jehetu amra createUser func. ta k return kora hoisilo r upre destructure kora hoise ty ei createUser k amra eikhne use korbo
        createUser(emilFld, passFld)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.massage)
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
                                    type="password" /* pass dekhanor jonne condition krte hobe krn amra show pass a click krle pass dekhabe nyle dekhabe na. er jonne ekta state use krte hobe. state ta false hobe krn nrmlly dekhabe na. dekhanor jonne oita true hoite hoibe. tai true hoile type: "true"; hobe r false hoile type: "password hobe" */
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered"
                                    required />
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
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
