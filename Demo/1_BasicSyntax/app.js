(function init() {

    const myDate = new Date(2015, 6, 24);
/*
    //hoisting
    x = 'Hello';
    document.writeln(x + '<hr/>');

    var x;

    //this wont work
    var a = "peas";

    document.writeln(a + ' and ' + b + '<br/>');

    var b = 'carrots';


    //const
    document.writeln('My date - ' + myDate);

    myDate = new Date(2015, 11, 25);

    document.writeln('My date - ' + myDate);

    document.writeln('<hr/>');


*/
    //var
    function varUsage () {
        var value = 5;

        if (true) {
            var value = 10;
            document.writeln("inside block, value is " + value + "<br/>");
        }

        document.writeln("outside look, value is " + value + "<br/>");
    };

    varUsage();

    document.writeln('<br/>');
    //let
    function letUsage () {
        let value = 5;

        if (true) {
            let value = 10;
            document.writeln("inside block, value is " + value + "<br/>");
        }

        document.writeln("outside look, value is " + value + "<br/>");
    };

   letUsage();
    
})();