import getOne from "./fetch.config";

const allSets = "/allSets";
const cards = "/cards";


/*----
function getAllOnePieceCards () {
    fetch(`${onePieceResponse}/${cards}`)
    .then(response => response.json())
    .then(returnedData => { 
        console.log(returnedData)
    })
    .catch(error => console.log(error))
}
-----*/

const getAllOnePieceSets = () => {
    return getOne.get(`${allSets}`);
};

export { getAllOnePieceSets };