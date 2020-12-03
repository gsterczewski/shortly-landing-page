const { default: API } = require("../src/js/api");
const api = require("../src/js/api")();
const expect = require("chai").expect;




describe("API module testing", function(){
    describe("getShortenURL",  function(){
        
        it("responds with shorten url", async function(){
            let result = await  api.shortenIt("https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G")
            expect(result).to.be.instanceOf('object')
            expect(result).to.haveOwnProperty("code")
            expect(result).to.haveOwnProperty("link")
            expect(result.code).to.be.a("string")

        });
    })
})