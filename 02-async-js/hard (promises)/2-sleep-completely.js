/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let milliseconds = seconds*1000;
    const start = Date.now();
    while (Date.now() - start < milliseconds){
        console.clear();
        console.log("Waiting");
        console.log("...");
    };
    console.log("Wait Ends")
}

sleep(1);