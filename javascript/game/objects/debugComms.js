export function debugComms() {

    let state = false;

    keyPress('f', () => {
        if(!state){
            debug.inspect = true;
            state = true;
        }
        else{
            debug.inspect = false;
            state = false;
        };
    });

    keyPress('g', () => {
        console.log('objCount: ' + debug.objCount());
    });
    
}