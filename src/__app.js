require("angular");

require("./index.html");
require("./styles/main.scss");
require("./index");
require("./demo.html");

angular.bootstrap(document, ["demo"], {strictDi: true});
