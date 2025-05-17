// import renderRectangle from "./rectangle.js"
// import renderTriangle from "./triangle.js"


// const shapes = [
//     { type: "rectangle" },
//     { type: "rectangle" },
//     { type: "triangle" }
// ];


// for (const shape of shapes) {
//     switch(shape.type){
//         case "rectangle":
//             renderRectangle();
//         break

//         case "triangle" :
//             renderTriangle();
//         break

//         default :

//         renderTriangle()
//     };
// }


const shapes = [
    { type: "rectangle" },
    { type: "rectangle" },
    { type: "triangle" }
];

for (const shape of shapes) {
    try {
        const { default: render } = await import(`./${shape.type}.js`);
        render();
    } catch (error) {
        console.error(`Failed to render shape: ${shape.type}`, error);
    }
}
