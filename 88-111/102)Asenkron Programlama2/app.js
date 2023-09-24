/*
1)Javascript senkron çalışan bir programlama dilidir
    Javascriptin asenkron çalıştığı durumlar

    1-Timing
    2-Event(olay)
    3-Http isteklerinde


*/

setTimeout(() => {
    console.log("Sezer");
}, 1000);
setTimeout(() => {
    console.log("Seda");
}, 500);
setTimeout(() => {
    console.log("Kevser");
}, 100);

setTimeout(() => {
    console.log("Cahit :(");
}, 10);