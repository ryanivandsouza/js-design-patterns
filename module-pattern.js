var myNamespace = (function () {

    // A private counter variable
    var privateVariable = 0;
  
    // A private function which logs args
    var privateMethod = function( foo ) {
        console.log( foo );
    };
  
    return {
      // A public variable
      publicVariable: "foo",
  
      // A public function utilizing privates
      publicFunction: function( bar ) {
        // Increment our private counter
        privateVariable += 1;
  
        // Call our private method using bar
        privateMethod( bar );
      }
    };
  })();
  