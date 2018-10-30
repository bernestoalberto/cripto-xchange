let statistics = require('blockchain.info/statistics');

let stats = {
    getStats:()=>{
        statistics.get().then((value)=>{
            //console.dir(`Overview of many Bitcoin statistics  `);
           // console.dir(value);
           return value;
        }).catch((error) => {
            console.error(error);
        });
    },
    getChartData: (option)=> {
        statistics.getChartData(option.timespan, option.timespan).then((value)=>{
           // cosole.log('An array of chart coordinate objects' + value);
           return value;
        }).catch((error)=>{
//console.error(error);
        });
    },
    getPoolData: (option)=>{
        statistics.getPoolData(option.timespan);
    }

};

module.exports = stats;
