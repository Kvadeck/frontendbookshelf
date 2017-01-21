import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import easyImport from 'postcss-easy-import';
import cssnext from 'postcss-cssnext';
import csso from 'gulp-csso';
import { PATHS } from '../config';
import { getPluginOptions } from '../helpers';


gulp.task('styles', () => {
	return gulp
		.src(`${PATHS.source.styles}/index.css`)
		.pipe(plumber(getPluginOptions('plumber')))
		.pipe(postcss([
			easyImport(getPluginOptions('postcssEasyImport')),
			cssnext(),
		]))
		.pipe(csso())
		.pipe(gulp.dest(PATHS.build.styles));
});
