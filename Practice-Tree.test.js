const { TestScheduler } = require("jest")

const practiceTree = require("./practice-tree")
describe("practice Tree", function(){
    test('I am in the tree', function(){
        const me = practiceTree[0]
        expect(me.name).toEqual("Yuna")
    })

    test("My brother is there too", function(){
        const brother = practiceTree[1]
        expect(brother.name).toEqual("Jay")
    })

    test("My mum is also in tree", function(){
        const me = practiceTree[0]
        const mum = me.parents[0]
        expect(mum.name).toEqual("Younglim")
    })
    test("My dad is also there", function(){
        const brother = practiceTree[1]
        const dad = brother.parents[0]
        expect(dad.name).toEqual("Ilsoo")
    })

    test("My granma is in the tree", function(){
        const brother = practiceTree[1]
        const dad = brother.parents[0]
        const granma = dad.parents[0]
        expect(granma.name).toEqual("Song")

    })
    
})