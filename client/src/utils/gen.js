// export function genProxies(user, pass, sid, data) {

//     var count = 0;

//     if (data === 0) {
//         count = 0;
//     }
//     else if (data === 5) {
//         count = 200;
//     }
//     else if (data === 10) {
//         count = 400;
//     }
//     else if (data === 20) {
//         count = 600;
//     }
//     else if (data === 30) {
//         count = 800;
//     }
//     else if (data === 40) {
//         count = 1000;
//     }
//     else if (data === 50) {
//         count = 1200;
//     }
//     else {
//         count = 600;
//     }
    
    
//     var proxyList = []
//     for (var i = 0; i < count; i++) {
//         let proxy = `pa-cometproxies-us.ntnt.io:5959:${user}-cc-cpus-sid-${sid + '-' + (i+1)}:${pass}`
//         proxyList.push(proxy);
//     }
//     return proxyList;
// }