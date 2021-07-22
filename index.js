const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(batteryCounter, element) {return element + batteryCounter},0);

console.log("total batteries = " + totalBatteries);