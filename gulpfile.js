const {src, dest, task, series, watch} = require('gulp');
const rm = require( 'gulp-rm' );
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const { stream } = require('browser-sync');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

task( 'clean', () => {
    return src( 'dist/**/*', { read: false }).pipe(rm())
});

task('copy:html', () =>{
    return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(reload({stream: true}));
});

const styles = [
    'node_modules/normalize.css/normalize.css',
    'src/SCSS/main.scss'
];
task('styles', () =>{
    return src(styles)
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    // .pipe(px2rem())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    // .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
    .pipe(reload({stream: true}))
});
const scripts = [
    'node_modules/jquery/dist/jquery.js',
    'src/JS/*.js',

];
task('scripts', () =>{
    return src(scripts)
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(reload({stream: true}))

});
task('img', () =>{
    return src('src/img/**/*.*')

    .pipe(dest('dist/img'))

});
task('server', () =>{
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: false
    });
});

watch('./src/SCSS/**/*.scss', series('styles'));
watch('./src/*.html', series('copy:html'));
watch('./src/JS/*.js', series('scripts'));
task('default', series('clean', 'copy:html','img' ,'styles', 'scripts', 'server'));

