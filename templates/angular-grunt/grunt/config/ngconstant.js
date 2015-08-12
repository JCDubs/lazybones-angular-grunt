// Define the environment specific constant variables.
module.exports = {
    options: {
        name: 'config',
        dest: '<%= paths.app %>/app/config.js'
    },
    development: {
        constants:{
            ENV: {'apiServerUrl':'<%= config.apiServerConfig.development %>', 'config':'<%= config.devConfig %>', 'events':'<%= config.events %>', userCookieName:'<%= config.cookieName %>'}
        }
    },
    local: {
        constants: {
            ENV: {'apiServerUrl': '<%= config.apiServerConfig.local %>', 'config': '<%= config.prodConfig %>', 'events':'<%= config.events %>', userCookieName:'<%= config.cookieName %>'}
        }
    },
    staging:{
        constants:{
            ENV: {'apiServerUrl':'<%= config.apiServerConfig.staging %>', 'config':'<%= config.prodConfig %>', 'events':'<%= config.events %>', userCookieName:'<%= config.cookieName %>'}
        }
    },
    production:{
        constants:{
            ENV: {'apiServerUrl':'<%= config.apiServerConfig.production %>', 'config':'<%= config.prodConfig %>', 'events':'<%= config.events %>', userCookieName:'<%= config.cookieName %>'}
        }
    }
}
