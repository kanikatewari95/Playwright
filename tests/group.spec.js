const{test,expect} = require('@playwright/test')

test.describe("check grouping", ()=>{

    test("test1", async({page})=>{
        console.log("test1")  
    })

    test("test2", async({page})=>{
        console.log("test2")  
    })

    test.describe("inside first describe", ()=>{
        test("test3", async({page})=>{
            console.log("test3")  
        })
    
        test("test4", async({page})=>{
            console.log("test4")  
        })
    })

})

test.describe("second describe", ()=>{
    test("test5", async({page})=>{
        console.log("test5")  
    })

    test("test6", async({page})=>{
        console.log("test6")  
    })
})

