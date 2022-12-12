var assert=require('assert')

describe('subTest',function(){
    describe("subAge",function(){
        //success test
        it('User\'s Age Should Be 22 when yearOfBirth=2000', function(){
            var result = new Date().getFullYear()-2000
            assert.equal(result,22)
        })
    })

    //fail test
    //describe("subAge",function(){
        //it('User\'s Age Shouldn\'t Be 23 when yearOfBirth=199', function(){
          //  var result = new Date().getFullYear()-1999
          //  assert.notEqual(result,23)
        //})
    //})
})