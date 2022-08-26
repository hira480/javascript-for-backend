// pending

// rtesolved

// rejected

const myPromise = new Promise((resolve, reject) => {
    const user = null;
    if (!user) {
        reject("Something is wrong");
    }
    else {
        setTimeout(() => {
            resolve("Successfully got the data");
        }, 1000);
    }
})