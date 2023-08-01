/* migrations/ 디렉토리 2_deploy_Counter.js 파일 */
 
const Counter = artifacts.require('Counter');
 
module.exports = function (deployer) {
    deployer.deploy(Counter);
};