def params = [:]

def projectDescription = "Angular application with the grunt task manager."

//Define the params for the project.
params.appName = ask('Define the name for your project [angular-grunt]: ', 'angular-grunt', 'appName')
params.moduleName = ask('Define value for your main AngularJS module [myApp]: ', 'myApp', 'moduleName')
params.privateProject = ask('Define whether the project is private [true]: ', 'true', 'privateProject')
params.description = ask('Provide a description of the project: ', "${projectDescription}", 'description')
params.authorName = ask('Define the author name [unknown]: ', 'Unknown', 'authorName')
params.companyName = ask('Define your company name [myCompany]: ', 'myCompany', 'companyName')
params.group = ask('Define the value for your application group [com.company]: ', 'com.company', 'group')
params.artifactId = ask('Define the value for your application artifactId [appName]: ', "${params.appName}", 'artifactId')
params.version = ask('Define value for your application \'version\' [0.1]: ', '0.1', 'version')

//Apply the params to the template files.
processTemplates 'package.json', params
processTemplates 'README', params
processTemplates 'bower.json', params
processTemplates 'src/app/devApp.js', params
processTemplates 'src/app/prodApp.js', params
processTemplates 'src/app/routes.js', params