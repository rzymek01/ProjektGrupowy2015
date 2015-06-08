interface Window {
    __karma__: any;
}
declare var requirejs: any;
declare var define: any;

(function(){
    function shouldFileBeIncludedAsDependency(file: string, baseUrl: string) {
        return new RegExp(`^${baseUrl}`).test(file);
    }

    function getModuleNameFromPath(file: string, baseUrl: string) {
        //we cut baseUrl prefix and .js suffix
        return file.slice(baseUrl.length).slice(0, -3);
    }

    function isModuleARouteConfig(moduleName: string) {
        return /\.routes$/.test(moduleName);
    }

    function generateMapAndDeps(files: { [path: string]: string }, baseUrl: string) {
        //each module, when asking about .routes.ts (angular route configuration) will get an empty routing mock
        const map = {
            '*': {}
        };

        //these will store all the modules that are initially loaded (their names, to be precise)
        const deps = [];

        Object.getOwnPropertyNames(files).forEach(file => {
            if (!shouldFileBeIncludedAsDependency(file, baseUrl)) {
                return false;
            }

            const moduleName = getModuleNameFromPath(file, baseUrl);

            if(isModuleARouteConfig(moduleName)) {
                map['*'][moduleName] = 'routes-mock';
            } else {
                deps.push(moduleName);
            }
        });

        return [map, deps];
    }

    const BASE_URL = '/base/app/';
    const [map, deps] = generateMapAndDeps(window.__karma__.files, BASE_URL);

    //karma runner can specify a callback to be run when it's ready
    //but we want the tests to wait for requirejs, so we overwrite it
    if(window.__karma__.loaded) {
        window.__karma__.loaded = () => {};
    }

    requirejs.config({
        // Karma serves files from '/base'
        baseUrl: BASE_URL,

        //all references to 'routes-mock' module will be resolved to file '../test/routes-mock.js'
        paths: {
            'routes-mock': '../test/routes-mock'
        },

        // ask require.js to load these files
        deps,
        map,

        //when require is done, start the tests
        callback: window.__karma__.start
    });
}());
