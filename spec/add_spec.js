var app=require("../src/add.js");
//1.name the test
//2.give description about the test
//3.pass params
//4.do the test 
describe("Addition",function(){
it("The function should add 2 numbers",function() {
var value=app.AddNumber(5,6);
expect(value).toBe(11);
});
});