/* migrations/ 디렉토리 2_deploy_Counter.js 파일 */
 
const Contract = artifacts.require('Contract');
 
module.exports = function (deployer) {
    deployer.deploy(Contract,10);
};