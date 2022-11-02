// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (driverArray, driverName) {
   return driverArray.filter((driver) => {
        return driver.toLowerCase() === driverName.toLowerCase()
    })
}
findMatching(drivers, "bobby")
console.log(findMatching(driverArray, "bobby"))

function fuzzyMatch (driverArray, driverName) {
    return driverArray.filter( function (driver) {
        return driver.toLowerCase().substring(0, driverName.length) === driverName.toLowerCase();

    })
}

console.logfuzzyMatch(drivers, "sa")

function matchName(driverArray, driverName) {
    return driverArray.filter( function (driver) {
        return driver.name === driverName
    })
}

