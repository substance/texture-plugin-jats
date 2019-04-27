/* eslint-disable no-template-curly-in-string */
const b = require('substance-bundler')
const path = require('path')
const compileSchema = require('texture-xml-utils/bundler/compileSchema')

const DIST = 'dist/'
const TMP = 'tmp/'

b.task('clean', function () {
  b.rm(DIST)
  b.rm(TMP)
})

b.task('publish', ['clean', 'build:schema', 'build:plugin'])

b.task('default', ['publish'])

b.task('build', ['build:schema', 'build:plugin'])

b.task('build:schema', ['build:schema:jats-archiving-1.0', 'build:schema:jats-archiving-1.1', 'build:schema:jats-archiving-1.2'])

b.task('build:schema:jats-archiving-1.0', () => {
  compileSchema(b, 'JATS-archiving-1.0', path.join(__dirname, 'rng', 'jats-archiving-rng-1.0', 'JATS-archivearticle1.rng'))
})

b.task('build:schema:jats-archiving-1.1', () => {
  compileSchema(b, 'JATS-archiving-1.1', path.join(__dirname, 'rng', 'JATS-Archiving-1-1-MathML3-DTD-RNG', 'JATS-archivearticle1-mathml3.rng'))
})

b.task('build:schema:jats-archiving-1.2', () => {
  compileSchema(b, 'JATS-archiving-1.2', path.join(__dirname, 'rng', 'JATS-Archiving-1-2-MathML3-RNG', 'JATS-archivearticle1-mathml3.rng'))
})

b.task('build:plugin', () => {
  b.js('src/texture-plugin-jats.js', {
    output: [
      {
        file: DIST + 'texture-plugin-jats.js',
        format: 'umd',
        name: 'TexturePluginJATS',
        globals: {
          'substance': 'substance',
          'texture': 'texture'
        }
      }
    ],
    external: [ 'substance', 'texture' ]
  })
})
