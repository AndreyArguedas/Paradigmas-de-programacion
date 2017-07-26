function Btree(info,left,right){
  this.info = info;
  this.left = left;
  this.right = right;

  this.toString = function(){
    var tsLeft = (this.left) ? this.left.toString() : "_";
    var tsRight = (this.right) ? this.right.toString() : "_";
    return this.info + "[ " + tsLeft + "/" + tsRight + " ]";
  }

  this.isLeaf = function(){
  return (this.left) ? false : (this.right) ? false : true;
  }

  this.height = function(){
    if(this.isLeaf())
      return 0;
    else {
      var left = this.left.height() + 1;
      var right = this.right.height() + 1;
      return Math.max(left,right);
    }
  }

  this.balanceFactor = function(){
    return this.left.height() - this.rigth.height();
  }

  this.isBalanced = function(){
    if(Math.abs(this.left.balanceFactor()) === 1)
      return true;
    else
      return false;
  }

  this.countNodes = function(){
    if(this.isLeaf())
      return 1;
    else
      return 1 + this.left.countNodes() + this.right.countNodes();
  }

  this.sum = function(){
    if(this.isLeaf())
      return this.info;
    else
      return this.info + this.left.sum() + this.right.sum();
  }

}

function search(elem,bt){
  if(bt){
    if(bt.info === elem)
      return true;
    else{
      if(bt.info > elem)
        return search(elem,bt.left);
      else
        return search(elem,bt.right);
    }
  }
  return false;
}

function printInOrder(bt){
  if(bt){
    printInOrder(bt.left);
    console.log(bt.info);
    printInOrder(bt.right);
  }
}

/*No esta sirviendo; no encuentro el error */
function deleteMin(bt,aux){
  if(bt){
    if(!bt.left){
      if(bt.isLeaf())
        aux.left = null;
      else{
        if(aux === undefined){ //Cuando es la raiz no me sale
          aux = bt.right;
          bt = aux;
        }
        else
          aux.left = bt.right;
      }
    }
    else
      deleteMin(bt.left,bt);
  }
}

function test_bt(){
  var btd = new Btree(8);
  var btc = new Btree(6);
  var btcd = new Btree(7,btc,btd);
  var btb = new Btree(2);
  var bta = new Btree(5,btb,btcd);
  var aux;var baux;
  console.log(bta.toString());
  console.log("Is 'a' leaf? " + bta.isLeaf());
  console.log("Is 'b' leaf? " + btb.isLeaf());
  console.log("Is 'c' leaf? " + btc.isLeaf());
  console.log(" 'a' height = " + bta.height());
  printInOrder(bta);
  console.log("Quantity of nodes in this tree is : " + bta.countNodes());
  console.log("Sum of nodes in this tree is : " + bta.sum());
  console.log("Did I find 85 " + search(85,bta));
  console.log("Did I find 6 " + search(6,bta));
  console.log("Did I find 7 " + search(7,bta));
  deleteMin(bta,aux);
  deleteMin(bta,baux);
  console.log(bta.toString());
}

test_bt();
