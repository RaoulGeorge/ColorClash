var require = {
    urlArgs: 'ts_' + new Date().getTime(),
    paths: {
        'knockout': 'lib/knockout-3.1.0',
        'Application': 'framework/application-instance',
        'text': 'lib/text',
        'bootstrap': 'lib/bootstrap.min'
    },
    shim: {

        'knockout': {
            exports: 'ko'
        },

    }
};