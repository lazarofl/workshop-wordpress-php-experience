import Gulp from 'gulp'
import help from 'gulp-help'
import deploy from './deployment/deploy'

const gulp = help(Gulp)

gulp.task('default', ['help'])

gulp.task('php', 'Move arquivos php', () => {
    return gulp.src('./app/**/*.*')
        .pipe(gulp.dest('./wordpress/wp-content/'))
})

gulp.task('build', 'Build da aplicação', ['php'], () => {})

gulp.task('deploy', 'Deploy da aplicação', () => {
    deploy()
})