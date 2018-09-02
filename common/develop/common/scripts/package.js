var child_process = require('child_process');
//调用执行文件
var openApp = function(){
    child_process.execFile('D:/sourceCode/ws-project/common/develop/common/scripts/package.bat',null,{cwd:'D:/sourceCode/ws-project/common/develop/common'},function (error,stdout,stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        else {
            console.log('执行成功');
        }
    });
}
openApp();
console.log('正在执行bat文件……');
