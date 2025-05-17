// import { setAdminUser } from "./user.js";

let user = {
    admin: true
}

// if (user.admin) {
//     setAdminUser()
// }


//lets use dynamic import 

/**
 * 
 * usr.js file will be loaded for every user
 * for remving unnecessary import we use dynamic import
 */

if(user.admin){
    const {setAdminUser} = await import("./user.js")
    setAdminUser()
}

/**
 * 
 * in this example you have see i have not use async and still it is working
 * write now whole module is workingas async 
 * Reduce the page load time and imported file when required
 */