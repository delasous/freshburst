// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// });
const { createLoader } = require('simple-functional-loader')
const rehypePrism = require('@mapbox/rehype-prism')
const visit = require('unist-util-visit')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic',
}

module.exports = withBundleAnalyzer({
  pageExtensions: ['js', 'jsx', 'mdx'],
  experimental: {
    modern: true,
  },
  webpack: (config, options) => {
    const mdx = [
      options.defaultLoaders.babel,
      {
        loader: '@mdx-js/loader',
        options: {
          rehypePlugins: [
            rehypePrism,
            () => {
              return (tree) => {
                visit(tree, 'element', (node, index, parent) => {
                  let [token, type] = node.properties.className || []
                  if (token === 'token') {
                    node.properties.className = [tokenClassNames[type]]
                  }
                })
              }
            },
          ],
        },
      },
    ]

    config.module.rules.push({
      test: /\.mdx$/,
      oneOf: [
        {
          resourceQuery: /preview/,
          use: [
            ...mdx,
            createLoader(function (src) {
              if (src.includes('<!--more-->')) {
                const [preview] = src.split('<!--more-->')
                return this.callback(null, preview)
              }

              const [preview] = src.split('<!--/excerpt-->')
              return this.callback(null, preview.replace('<!--excerpt-->', ''))
            }),
          ],
        },
        {
          use: [
            ...mdx,
            createLoader(function (src) {
              const content = [
                'export { getStaticProps } from "../../components/getStaticProps"',
                src
              ].join('\n')

              if (content.includes('<!--more-->')) {
                return this.callback(null, content.split('<!--more-->').join('\n'))
              }

              return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''))
            }),
          ],
        },
      ],
    })
  return config
  },
})
