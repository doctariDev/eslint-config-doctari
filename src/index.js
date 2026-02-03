import defaultConfig from './default.js';
import reactConfig from './react.js';
import typescriptConfig from './typescript.js';

export {defaultConfig, reactConfig, typescriptConfig};
export default [...defaultConfig, ...reactConfig, ...typescriptConfig];
