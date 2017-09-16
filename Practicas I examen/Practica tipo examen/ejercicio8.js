function subArrays(s){

    function cola(s, result, i, last){
        if(i == s.length)
            return result
        else{
            if(!i)
                result.push(last)
            else{
                console.log("El last es:",last);
                last = result.reduce( (z, x) => z.concat(subArray(x, i)), result);
                result = last
                console.log(result);
                console.log("El nuevo last es:", last);
            }
            return cola(s, result, i + 1, last)
        }
    }

    function subArray(x, i){
        return s.reduce( (z, e) => {if(allowed(e, x, i)) z.push([e]); return z;}, []);
    }

    function allowed(e, x, i){
        if(x.length <= i && !x.includes(e)){
            console.log("ac",e,"en",i,"con last = ",x)
            return true
        }   
        return false
    }

    return cola(s, [], 0, [])
}

console.log(subArrays([2, 1, 1]))