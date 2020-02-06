/* config-overrides.js
*
* created by lu.yixin on 2020/01/28
* react-create-app 使用 react-script 库配置
* 为了环境整洁，不输出react-script 的webpack 配置
* 使用react-app-rewired 进行配置重写
*/

const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
} = require('customize-cra');
const style = require('./src/config/antdThemeStyleConfig.js');

const addProcessEnv = (config) => {
  const DOMAIN = process.env[`${process.env.APP_ENV}_DOMAIN`];
  const PATH = process.env[`${process.env.APP_ENV}_PATH`];
  const { definitions } = config.plugins[4];
  definitions['process.env'] = {
    ...definitions['process.env'],
    DOMAIN: `"${DOMAIN}"`,
    PATH: `"${PATH}"`,
  };
  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: style,
  }),
  addDecoratorsLegacy(),
  process.env.NODE_ENV === 'production' && addProcessEnv,
);
