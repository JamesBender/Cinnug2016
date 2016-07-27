(function init() {
    //setup
    window.value = 100;
    
    var myObject = {
        value: 0,
        increment: function(inc){
            this.value += inc; 
        }
    };


    //method invocation

     myObject.increment(0);
     document.writeln("First increment: " + myObject.value + '<br\>');
     myObject.increment(3);
     document.writeln("Second increment: " + myObject.value + '<br\>');


    //function invocation
    myObject.double = function() {
        this.value++;
    
        var helper = function() {
            this.value =  this.value + this.value;
            return this.value;
        };

        document.writeln('<br/>Value of "this" from function: ' + helper() + '<br/>');
    };

    myObject.double();
    document.writeln("Doubling: " + myObject.value);
})();