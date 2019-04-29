const b = require('substance-bundler')
const path = require('path')
const compileSchema = require('texture-xml-utils/bundler/compileSchema')
const generateSchemaDocumentation = require('texture-xml-utils/bundler/generateSchemaDocumentation')

const DIST = 'dist/'
const TMP = 'tmp/'

b.task('clean', function () {
  b.rm(DIST)
  b.rm(TMP)
})

b.task('default', ['publish'])

b.task('publish', ['clean', 'build'])

b.task('build', ['build:schema', 'build:plugin'])

b.task('build:schema', ['build:schema:jats-archiving-1.0', 'build:schema:jats-archiving-1.1', 'build:schema:jats-archiving-1.2'])

b.task('build:schema:jats-archiving-1.0', () => {
  let rngFile = path.join(__dirname, 'rng', 'jats-archiving-rng-1.0', 'JATS-archivearticle1.rng')
  let name = 'JATS-archiving-1.0'
  _buildSchema(name, rngFile)
})

b.task('build:schema:jats-archiving-1.1', () => {
  let rngFile = path.join(__dirname, 'rng', 'JATS-Archiving-1-1-MathML3-DTD-RNG', 'JATS-archivearticle1-mathml3.rng')
  let name = 'JATS-archiving-1.1'
  _buildSchema(name, rngFile)
})

b.task('build:schema:jats-archiving-1.2', () => {
  let rngFile = path.join(__dirname, 'rng', 'JATS-Archiving-1-2-MathML3-RNG', 'JATS-archivearticle1-mathml3.rng')
  let name = 'JATS-archiving-1.2'
  _buildSchema(name, rngFile)
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
      }, {
        file: DIST + 'texture-plugin-jats.cjs.js',
        format: 'cjs'
      }
    ],
    external: [ 'substance', 'texture' ]
  })
  b.minify(DIST + 'texture-plugin-jats.js', {
    debug: false
  })
})

function _buildSchema (name, rngFile) {
  compileSchema(b, rngFile, {
    name,
    dest: TMP + `${name}.data.js`
  })
  generateSchemaDocumentation(b, rngFile, {
    name,
    dest: TMP + `${name}.md`
  })
}
