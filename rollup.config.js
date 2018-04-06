import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import coffee from 'rollup-plugin-coffee2'
import path from 'path'

const pkg = require(path.resolve(process.cwd(), './package.json'))

const basePlugins = [
  coffee(),
  commonjs({
    // exclude: [path.join(__dirname, 'packages', '*/src/**/*')],
    extensions: ['.js', '.coffee'],
  }),
  resolve({ preferBuiltins: true, extensions: ['.js', '.coffee'] }),
  builtins(),
  babel({ exclude: 'node_modules/**' }),
]

const input = { input: './src/index.coffee' }

const mainConfig = Object.assign({}, input, {
  plugins: basePlugins,
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named', sourcemap: true },
    { file: pkg.module, format: 'es', exports: 'named', sourcemap: true },
  ],
})

export default [mainConfig]
