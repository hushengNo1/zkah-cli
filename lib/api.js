const axios = require('axios');
// 拦截全局请求响应
axios.interceptors.response.use((res) => {
  return res.data;
});
/**
 * 获取模板
 * @returns Promise 仓库信息
 */
async function getZhuRongRepo() {
  return axios.get('https://api.github.com/orgs/zkah01/repos');
 /*  return axios.get(
    'https://gitee.com/api/v5/users/hushengno1/repos?type=all&sort=full_name&page=1&per_page=100'
  ); */
}
/**
 * 获取仓库下的版本
 * @param {string} repo 模板名称
 * @returns Promise 版本信息
 */
async function getTagsByRepo(repo) {
  return axios.get(`https://api.github.com/repos/zkah01/${repo}/tags`);
  // return axios.get(`https://gitee.com/api/v5/repos/hushengno1/${repo}/tags`);
}
module.exports = {
  getZhuRongRepo,
  getTagsByRepo,
};
