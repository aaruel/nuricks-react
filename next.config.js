const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
    exportPathMap: function () {
        return {
            '/':              { page: '/'          },
            '/dashboard':     { page: '/dashboard' },
            '/admin':         { page: '/admin'     },
            '/account':       { page: '/account'   },
            '/musician/slug': { page: '/musician', query: {id: 'slug'}}
        }
    },
    webpack: function (cfg) {
        cfg.plugins = cfg.plugins.filter(plugin => {
            return plugin.constructor.name !== 'UglifyJsPlugin';
        });
        if (process.env.NODE_ENV == "production") {
            cfg.plugins.push(new BabiliPlugin());
        }
        return cfg;
    }
}
