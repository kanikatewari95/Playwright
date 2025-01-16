const{ test,expect } = require('@playwright/test')

test("test1 @abc", async({page})=>{
    console.log("this is test1")
})

test("test2@pqr", async({page})=>{
    console.log("this is test2")
})

test("test3@abc@pqr", async({page})=>{
    console.log("this is test3")
})

test("test4@abc", async({page})=>{
    console.log("this is test4")
})

test("test5@pqr", async({page})=>{
    console.log("this is test5")
})

/*To run a test that have @abc as a tag
npx playwright test ./tests/tags.spec.js --project chromium --headed --grep "@abc"*/