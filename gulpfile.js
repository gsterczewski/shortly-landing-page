const { src,dest, watch, series, parallel } = require("gulp");

const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const purgeCSS = require("gulp-purgecss");
const concat = require("gulp-concat");
const sync = require("browser-sync").create();

const config = {
    paths : {
        dist : {
            root : "./dist"

        },
        src : {
            root : "./src",
            styles : "./src/styles",
            js : "./src/js"
        },

    },
    options:{
        tailwind : "./tailwind.config.js",
        bundles:{
            css : "main.css",
            js: "main.js"
        },
        port : 9000
    }
}
const extensions = {
    html : ".html",
    js : ".js",
    sass : ".scss"
}
const appendExtension = (path, extension = "") => `${path}/**/*${extension}`

const handleHTML = () => src(appendExtension(config.paths.src.root,extensions.html)).pipe(dest(config.paths.dist.root))

const handleStyles = () => src(appendExtension(config.paths.src.styles))
.pipe(sass().on('error',sass.logError))
//.pipe(concat({path: config.options.bundles.css}))
.pipe(dest(config.paths.dist.root))

const handleJS = () => src(appendExtension(config.paths.src.js, extensions.js))
.pipe(concat({path:config.options.bundles.js}))
.pipe(dest(config.paths.dist.root))


const serve = done => {
    sync.init({
        server : {
            baseDir : config.paths.dist.root
        },
        port : config.options.port
    })
    done();
}
const reload = done => {
    sync.reload()
    done()
}

const withReload = (path,job) => watch(path,series(job,reload))

const watchFiles = () => {
    withReload(appendExtension(config.paths.src.root,extensions.html), handleHTML )
    withReload(appendExtension(config.paths.src.styles),handleStyles )
    withReload(appendExtension(config.paths.src.js),handleJS )
}  

exports.default = series(
    parallel(handleStyles,handleJS,handleHTML,serve,watchFiles)
)