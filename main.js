$(document).ready(function(){
    console.log("main js running");
    // jQuery methods go here...
    $(document).scannerDetection(
        {
        timeBeforeScanTest: 200, // wait for the next character for upto 200ms
        startChar: [120], // Prefix character for the cabled scanner (OPL6845R)
        endChar: [13], // be sure the scan is complete if key 13 (enter) is detected
        avgTimeByChar: 40, // it's not a barcode if a character takes longer than 40ms
        onComplete: function(barcode, qty){
             console.log(barcode);
             console.log(qty);
             
             $("h1.string").text(barcode);
            
            return false;

            },
        onReceive: function(e,data){
            if(e){
                // console.log(e);
            } else {
                console.log(data);
            }
        }// main callback function	
        // onKeyDetect: function(event){
        //     console.log(event.which); 

            // return false;
        
    });
    // .bind('scannerDetectionReceive', function(e,data){
    //     if(e){
    //         console.log("something went wrong");
    //     } else{
    //         console.log(data);
    //          ("h1.string").text(data.text);

    //     }
    // });
 
 });
