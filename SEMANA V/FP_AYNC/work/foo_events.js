/*
 @author loriacarlos@gmail.com
 @since 2017
*/

function foo() {
  console.log("foo_1");
  setTimeout(goo, 1000);
  console.log("foo_2"); 
  hoo();
  console.log("foo_3");
}

function goo() {
  console.log("goo_1");
}

function hoo() {
  console.log("hoo_1");
}

foo();