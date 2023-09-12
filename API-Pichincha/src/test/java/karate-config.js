function fn() { karate.configure('ssl', true);
    var env = karate.env;
    var urlDemo = '';
    karate.log('Se realizó la ejecución en el ambiente: ', env);

 if (!env) {
     env = 'dev';
 }
 if (env === 'dev') {

 } else if (env === 'cert') {
    urlDemo = 'https://petstore.swagger.io/v2'
 }

 var config = {
    env: env,
    urlDemo: urlDemo
 }

 return config;
 }