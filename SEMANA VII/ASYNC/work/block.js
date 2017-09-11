/*
 @author loriacarlos@gmail.com
 @since 2017
*/
// Enqueue callback to be executed in next thick (apparently)
setTimeout(() => {  
                    console.log(`Function Timed-out now starts at ${(new Date()).toTimeString()}`)
                 }, 
                 0
);

// Show time in main thread
var start = new Date();  
console.log(`\nIn main at: ${start.toTimeString()}`);

// Block main Tread during 5 seconds
let iters = 0;  

for (; new Date().getTime() < start.getTime() + 5000; iters++);

// 
console.log(`\nExit blocking loop at: ${new Date().toTimeString()}`)
console.log(`Loop took ${iters} iterations.`)