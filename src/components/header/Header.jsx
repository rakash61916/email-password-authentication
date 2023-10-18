import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProviderByContext";


export default function Header() {

    const { user, userLogOut } = useContext(UserContext);

    const links = <>
        <li className="bg-cyan-200 rounded-lg"><NavLink to="/login">Log In</NavLink></li>
        <li className="bg-cyan-200 rounded-lg"><NavLink to="/signUp">Sign Up</NavLink></li>
        <li className="bg-cyan-200 rounded-lg"><NavLink to="/signup2">Sign Up ContextAPI</NavLink></li>
    </>


    const logOutBtn = () => {
        userLogOut()
            .then(() => {
                console.log("Successfully loged out")
            })
            .catch(error => console.error(error))
    }

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" bg-gray-200 menu menu-sm dropdown-content z-[1] p-2 shadow rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex mx-auto ">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {links}
                    </ul>
                </div>

                {
                    // user thakle user er mail r sign out btn show krbe. r signout btn a click krle abr choila jabe shb
                    user ? <>
                        <p>{user.email}</p>

                    </>
                        : <p>Please Log in</p>
                }
                <div>
                    <button onClick={logOutBtn} className="btn btn-primary">Sign out</button>
                </div>

            </div>
        </>
    )
}




// <div>
//     <button onClick={signOutBtn} className="btn btn-primary">Sign out</button>
// </div>