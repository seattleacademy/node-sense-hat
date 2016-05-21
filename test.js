var nodeimu = require('nodeimu');
var IMU = new nodeimu.IMU();

IMU.getValue(function(err, data) {
    if (err) console.log(err)
    else console.log(data);
});
