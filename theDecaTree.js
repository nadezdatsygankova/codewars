/*
In the Deca Forest, grow the Deca Trees.

On each Deca Tree, a trunk has 10 branches.

On each branch, there are 10 twigs.

On each twig, there are 10 leaves.

Unfortunately, the Deca Forest is becoming wildly overgrown and is endangering the local wildlife. You must add methods to the tree object so that the woodcutter can remove parts of a tree as follows, where n is a positive integer:

chopTrunk(n)     will remove n trunks
chopBranch(n)    will remove n branches
chopTwig(n)      will remove n twigs
chopLeaf(n)      will remove n leaves
Make sure that when you remove any part of the tree, you also remove all the smaller parts attached to it. e.g. if you remove a twig you must also remove 10 leaves from the tree object. The woodcutter's aim is to trim back this forest, so he will try to remove as much of the tree as possible each time he chops.

Conversely, when you remove a smaller part, you do not need to remove the larger parts it is attached to - for example you could pick off all the leaves from a tree and the number of twigs, branches and trunks would be unaffected.

The tree cannot have a negative number of trunks, branches, leaves or twigs. That would be highly unnatural.

You must also add a method 'describe' that allows the Deca Forest tourguides to describe each tree. It should describe the tree in the following format:

"This tree has a trunks, b branches, c twigs and d leaves."

(where a, b, c and d are integer values)

Your methods will be tested for trees with varying numbers of trunks and for removing random numbers of leaves, twigs, branches and trunks. The test will use only positive integers for these values.

*/

function tree(trunks) {
    if(trunks < 0 ){
      this.trunks = 0;
      this.branches = 0;
      this.twigs = 0;
      this.leaves = 0;
    }
    else{
      this.trunks = trunks;
      this.branches = trunks * 10;
      this.twigs = trunks * 100;
      this.leaves = trunks * 1000;
      }

  this.chopLeaf = function(n){
      if(n> this.leaves){
          this.leaves =0;
        }
     else{
         this.leaves = this.leaves - n;
         return this.leaves;
       }
  }

  this.chopTwig = function(n){
      if(n>this.twigs)
      {
        this.twigs =0;
        this.leaves =0;
      }
    else{
        if((this.leaves - n*10)< 0){
          this.leaves = 0;
        }
      else{
      this.leaves = this.leaves - n*10;
        this.twigs = this.twigs -n;
      }
      }
  }
  
  this.chopBranch = function(n){
      if(n > this.branches)
      {
        this.twigs = 0;
        this.leaves = 0;
        this.branches = 0;
      }
     else{
        if((this.leaves - n*100) < 0) {
          this.leaves = 0;
          
        }
       else if ((this.twigs - n*10) < 0){
        this.twigs = 0;
      }
        else{
      this.leaves = this.leaves - n*100;
      this.twigs = this.twigs -n*10;
      this.branches = this.branches -n;
        }
    }
  }

  this.chopTrunk = function(n){
      if(n>this.trunks)
      {
        this.twigs = 0;
        this.leaves = 0;
        this.branches = 0;
        this.trunks = 0;
      }
    else{
        if((this.leaves - n*1000) < 0) {
         
          this.leaves = 0;
          
        }
       else if( (this.twigs - n*100) < 0){
         this.twigs = 0;
      }
      else  if((this.branches - n*10)< 0){
        this.branches = 0;
      }
        else{
      this.leaves = this.leaves - n*1000;
  this.twigs = this.twigs -n*100;
  this.branches = this.branches -n*10;
  this.trunks = this.trunks -n;
        }
    }
  }

  this.describe= function (){
  return "This tree has " + this.trunks + " trunks, "+ this.branches + " branches, " + this.twigs + " twigs and " + this.leaves + " leaves.";
}
}

var myTree = new tree(66);
console.log(myTree.describe())
myTree.chopTrunk(9);
console.log(myTree.describe());
myTree.chopBranch(318);
console.log(myTree.describe());
myTree.chopTwig(1251);
console.log(myTree.describe());
myTree.chopLeaf(48376);
console.log(myTree.describe());




var myTree = new tree(216);
console.log(myTree.describe())
myTree.chopTrunk(212);
console.log(myTree.describe());
myTree.chopBranch(2160);
console.log(myTree.describe());
myTree.chopTwig(216000);
console.log(myTree.describe());
myTree.chopLeaf(206819);
console.log(myTree.describe());


// function chopLeaf(n) {
//     console.log(myTree.leaves);
//     myTree.leaves = myTree.leaves - n;
//     return myTree.leaves;
// }





// function chopTwig(n){
//     myTree.leaves = myTree.leaves - n*10;
//     myTree.twigs = myTree.twigs -n;
// }

// function chopBranch(n){
//     myTree.leaves = myTree.leaves - n*100;
//     myTree.twigs = myTree.twigs -n*10;
//     myTree.branches = myTree.branches -n;
// }

// function chopTrunk(n){
//     myTree.leaves = myTree.leaves - n*1000;
//     myTree.twigs = myTree.twigs -n*100;
//     myTree.branches = myTree.branches -n*10;
//     myTree.trunks = myTree.trunks -n;
// }


// function describe(){
//     return "This tree has " + myTree.trunks + " trunks, "+ myTree.branches + " branches, " + myTree.twigs + " twigs and " + myTree.leaves + " leaves";
// }

// chopLeaf(1);
// console.log(myTree.leaves);
// chopTwig(1);
// console.log(myTree.leaves);
// console.log(myTree.twigs);
// console.log(describe());
