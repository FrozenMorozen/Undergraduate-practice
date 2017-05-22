require.config({
    urlArgs: "fake=" + (new Date()).getTime(),
    paths: {
       handlebars: "libs/handlebars",
       text: "libs/text",
       hbs: "libs/hbs"
    },
    shim: {
       handlebars: {
           exports: "Handlebars"
       }
    }
});