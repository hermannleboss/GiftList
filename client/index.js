const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const verifyProof = require("../utils/verifyProof");


// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();

const serverUrl = 'http://localhost:1225';
const name = "Hermann EHO"
const index = niceList.findIndex(n => n === name);
const proof = merkleTree.getProof(index);
async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
      name,
      proof
  });
    // console.log(proof)
  console.log({ gift });
}

main();