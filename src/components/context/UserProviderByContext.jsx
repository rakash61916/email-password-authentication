import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.init";

export const UserContext = createContext(null);

export default function UserProviderByContext({children}) {

/*********************************************** User Create korar jonne ***********************************************/

    // jehetu auhtentication niye kaj kora lgbe ty state use kora lgbe. state use krar krn ta pore dekha jabe
    const [user, setUser] = useState(null);

    //ei func. ta user er state r value er majkhnei declare kora lgbe
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

/******************************** User auth state chng hoise kina observe krar jnne ********************************/

    // auth state change observe krar jnne amra useEffect use krbo. 
    useEffect ( () => {
        
        // eita amder user data/state ta observe krbe. mane kono user login/logout/notun user register korse kina shb observe krbe. user er state ta k dhore rakhbe ba store kore rakhbe jeno logout/refresh/browser off kore dileo info gula chole na jay for a certain time porjonto.
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current Loged in User info :- ",currentUser)
            setUser(currentUser); //jehetu setUser a currentuser set krsi r setUser er value ta user. ty user = currentUser. r ei user ta jehetu valueOfSomething er maddhome context er vitor pura state a diya dawa hoise tai jekono jygy geleo amra user er info gulo dekhte parbo, mane theke jabe. ekhon ei info gula jn na thke she jonne amra full onAuthState ta k ekta variable(unSubscribe) er moddhe rakhsi & pore ei func er baire return kore disi
        })

        return () => {
            unSubscribe()
        }

    }, [])

/******************************************User Log out/Sign out krar jnne *****************************************/    

    
    // create function for sign OUT. sign out er jonne kono state lgbe na
    const userLogOut = () =>{
        return signOut(auth);
    }

    //create user eikhne dawar krn hoilo jeno full website er jekono jygy jeno createUser func. ta use kora jay. krn ei valueOfSomething ta jehetu niche context er value te use kora hoise tai eita amra shob jaygatei use krte prbo
    const valueOfSomething = {
        user, 
        createUser, 
        userLogOut
    } 
    /*jehetu user r createUser shorashori export kori nai kintu context a value er maddhome use krsi tai ei context k onno kono file a export korte hoile amra useContext hook krbo oi file a*/


    return (
        <>
            <UserContext.Provider value={valueOfSomething}> {/* eitar peter moddhe ja thkbe shei shob gulakei access krte prbe*/}
                {children}
            </UserContext.Provider>
        </>
    )
}











/***
 * 1. create context
 * 2. ei context er nam ta te (.provider) dite hobe r er moddhe value set kora lgbe.
 * 3. ei context ta k ekhon main.jsx a pathabo krn porobortite ja hobe ta eitar vitore hobe. ty rout takeo er vitore childer hishabe set korte hbe
 * 4. ekhn ei rout ta children hishabe kaj krbe UserProvider.provider er.... mane (UserProvider.provider) hoilo router er parent. r ei child ta k ekhn ei func er vitore prop er moto koira pathaite hobe. trpr ei child k provider er vitore set korlei kaj shesh
 * ***/