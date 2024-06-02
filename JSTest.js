/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTsArray =[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (Name, Model, Year, Colour) {
   const NFT  = {
      "name": Name,
      "model": Model,
      "year": Year,
      "colour":Colour
   }
   NFTsArray.push(NFT);
   console.log("Minted :"+Name) ;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0;i<NFTsArray.length;i++){
   console.log("Name is:" + NFTsArray[i].name);
   console.log("Model is:" + NFTsArray[i].model);
   console.log("Year is:" +NFTsArray[i].year);
   console.log("Colour is:"+NFTsArray[i].colour);

}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Length of NFT array is :" +NFTsArray.length);

}

// call your functions below this line
mintNFT("Porsche",911,2024,"Black");
listNFTs();
getTotalSupply();

