describe("pow", function() {
 describe("возводит в степень 3", ()=>{
    function makeTest(x){
        let expected = x*x*x;
        it(`${x} в степені 3 буде ${expected}`, function() {
          assert.equal(pow(x, 3), expected);
        });
    }
    
    for (let x = 1; x<=5; x++){
        makeTest(x);
    }
 });
   
  
  });