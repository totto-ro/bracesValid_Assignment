function bracesVal( string ){
    let parenthesis = []

    for( let i=0;i < string.length; i++ ){
        let top = parenthesis[parenthesis.length-1];

        if ( string[i] === "(" || string[i] === "{" || string[i] === "["){
            parenthesis.push(string[i]); 
        }
        else if(  string[i] === ")" ) {
            if(parenthesis.length === 0){
                return false;
            }
            else {
                if( top === '(' ) {
                    parenthesis.pop();
                }
                else {
                    return false;
                }
            }
        }
        else if(  string[i] === "]" ) {
            if(parenthesis.length === 0){
                return false;
            } 
            else {
                if( top === '[' ) {
                    parenthesis.pop();
                } 
                else {
                    return false;
                }
            }
        }
        else if(  string[i] === "}" ) {
            if(parenthesis.length === 0){
                return false;
            }
            else {
                if( top === '{' ) {
                    parenthesis.pop();
                }
                else {
                    return false;
                }
            }
        }
    }
    if(parenthesis.length === 0){
        return true;
    }
    return false;
}

console.log(bracesVal( "{{()}}[]" )) // true
console.log(bracesVal( "{(})" )) // false
console.log(bracesVal( "{}({})[]" )) // true
console.log(bracesVal( ")(}{][" )) // false
console.log(bracesVal( "())({}}{()][][" )) // false
console.log(bracesVal( "(((({{" ))  // false
console.log(bracesVal( "}}]))}])" )) // false
let result = bracesVal( "x*(x+z) + x/(y-z) + d" ) // true
console.log( result )

