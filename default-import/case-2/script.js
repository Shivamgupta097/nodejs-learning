// import englishTranslations from "./en-translations.js"
// import indiaTranslations from "./in-translations.js"
// import spanishTranslations from "./sp-translations.js"
// import frenchTanslations from "./fr-translations.js"

// const user ={
//     local:"in"
// }
// let translations ;
// switch(user.local){
//     case "in":
//         translations = indiaTranslations
//         break

//     case "sp":
//         translations = spanishTranslations
//         break

//     case "en":
//         translations = englishTranslations

//     case "fr":
//         translations = frenchTanslations

//     default :
//         translations = indiaTranslations
// }

// console.log(translations.HI+ " world")


/** Dynamic Import  */

const user = {
    local: "i"
}
let translations;
try {
    const {default : data} = await import(`./${user.local}-translations.js`);
    // translations = importedTranslations;
    translations = data

} catch (error) {
    const {default:data} = await import(`./in-translations.js`);
    translations = data

}

console.log(translations.HI+ " world")

/**
 * 
 * see in this case we are importing only condition fullfill and we are aslo defining in catch what import file should i take
 * So we are reducing memory and load time
 */
