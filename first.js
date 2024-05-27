// create a variable to hold your NFT's
let NFTS = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, age, cgpa, ispass) {
    const NFT = {
        name: name,
        age: age,
        cgpa: cgpa,
        ispass: ispass,
    };
    NFTS.push(NFT); // Push the created NFT object into the array NFTS
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTS.length; i++) {
        console.log("Name: " + NFTS[i].name);
        console.log("Age: " + NFTS[i].age);
        console.log("CGPA: " + NFTS[i].cgpa);
        console.log("Is Pass: " + NFTS[i].ispass);
        console.log("\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted: " + NFTS.length);
}

// call your functions below this line
mintNFT("himanshu", "20", "7.8", true);
mintNFT("john", "22", "8.5", false);
mintNFT("emma", "21", "9.2", true);

listNFTs();
getTotalSupply();
