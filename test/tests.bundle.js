var context = require.context('../app', true, /(modules\/.+\/.+|app.+|constants)\.ts$/);
context.keys().forEach(context);
module.exports = context;
