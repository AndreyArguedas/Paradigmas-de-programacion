let testP = start => { return Promise.resolve(start)
                     .then(res => res + 1)
                     .then(res => res * 2)
                     }
                    

testP(332).then(res => console.log("Devil's number is ", res));

