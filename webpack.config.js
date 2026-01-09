const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Pro vývoj (lepší chybové hlášky)
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Vyčistí složku dist před každým buildem
  },
  devtool: 'inline-source-map', // Pomůže ti přesně vidět, kde nastala chyba
  devServer: {
    static: './dist',
    watchFiles: ['./src/**/*'], // Sleduje změny v souborech
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List', // Název tvé stránky v prohlížeči
      template: './src/index.html', // (Volitelné) Pokud si vytvoříš vlastní šablonu, jinak to smaž a plugin vytvoří základní HTML sám
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Pro načítání obrázků (např. ikony koše, editece)
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', // Pro načítání fontů
      },
    ],
  },
};