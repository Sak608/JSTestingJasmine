
function fetchData(callback){
    setTimeout(() => {
        callback('Data Received.');
    }, 2000);
}

function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data Received.');
        }, 1000);
    })
}

async function fetchDataAsync(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data Received.');
        }, 1000);
    })
}

module.exports = { fetchData, fetchDataPromise, fetchDataAsync};