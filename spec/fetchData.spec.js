// const { fetchData } = require('../src/fetchData');

// describe('testing Asynchronous code with callback...', () => {
//     it('Should fetch data successfully', (done) => {
//         console.log('Testing Async Operation....');
//         fetchData((data) => {
//             expect(data).toBe('data Received.');
//             done();
//         })
//     })
// })

const { fetchData, fetchDataPromise, fetchDataAsync } = require('../src/fetchData');

describe('Testing Asynchronous code with Callback, Promises, and Async/Await', () => {

// Testing the fetchData function (Callback)
    it('should fetch data successfully (Callback)', (done) => {
        console.log('Testing Async Operation with Callback...');
        fetchData((data) => {
        expect(data).toBe('Data Received.');
        done(); // Notify Jasmine that the test is complete
        });
    });

// Testing the fetchDataPromise function (Promise)
    it('should fetch data successfully (Promise)', () => {
        console.log('Testing Async Operation with Promise...');
        return fetchDataPromise().then((data) => {
        expect(data).toBe('Data Received.');
        });
    });

// Testing the fetchDataAsync function (Async/Await)
    it('should fetch data successfully (Async/Await)', async () => {
        console.log('Testing Async Operation with Async/Await...');
        const data = await fetchDataAsync();
        expect(data).toBe('Data Received.');
    });

});