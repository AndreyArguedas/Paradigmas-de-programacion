function subArrays(s){

    function cola(s, result, i){
        if(i == s.length)
            return result
        else{
            if(!i)
                result.push([])
            else
                result = result.reduce( (z, x) => z.concat(subArray(x, i)), result);
            return cola(s, result, i + 1)
        }
    }

    function subArray(x, i){
        return s.reduce( (z, e) => {if(allowed(e, x, i)){z.push(x.concat(e))} return z}, [])
    }

    function allowed(e, x, i){
        if(x.length + 1 == i && !x.includes(e))
            return true
        return false
    }
    
    return cola(s, [], 0) //Falta filtrar para que no salgan los que son iguales ej [2,1] = [1,2]
}

console.log(subArrays([2, 1, 1]))
console.log(subArrays([89, 7, 74, 65]))