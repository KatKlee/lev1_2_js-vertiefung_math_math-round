let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

const rounded = () => {
    for (let i = 0; i < array.length; i++) {
        console.log(Math.round(array[i]))
    }
}

rounded()

