const { add, subtract } = require('../src/calculator')

//test Suite
// describe('Calculator Testing', function() {
//     //test case 1
//     it('Should add two numbers correctly', function() {
//         expect(add(100,200)).toBe(300);
//     })

//     //test case 2
//     it('Should subtract two numbers correctly', function() {
//         expect(subtract(100,200)).toBe(-100);
//     })

//     //test case 3
//     it('Should check matchers', () => {
//         expect(2+2).toBe(4);
//         expect([1,2,3]).toContain(2);
//         expect(null).toBeNull();
//         expect(true).toBeTruthy();
//         expect(false).toBeFalsy();
//     })

// })

describe('Calculator Testing', function () {
    describe('Addition Testing', () => {

        it('Adding two positive numbers', () => {
            expect(add(100, 200)).toBe(300);
        })

        it('Adding two negative numbers', () => {
            expect(add(-100, -200)).toBe(-300);
        })

        it('Adding one positive and one negative numbers', () => {
            expect(add(100, -200)).toBe(-100);
        })

        it('Adding one negative and one positive numbers', () => {
            expect(add(-100, 200)).toBe(100);
        })
    })

    describe('Subtraction testing', () => {
        it('Subtracting two positive numbers', () => {
            expect(subtract(100, 200)).toBe(-100);
        })

        it('Subtracting two negative numbers', () => {
            expect(subtract(-100, -200)).toBe(100);
        })

        it('Subtracting one positive and one negative numbers', () => {
            expect(subtract(100, -200)).toBe(300);
        })

        it('Subtracting one negative and one positive numbers', () => {
            expect(subtract(-100, 200)).toBe(-300);
        })
    })
})