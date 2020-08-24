function importAll(r) {
  return r
    .keys()
    .map((fileName) => ({
      link: fileName.replace(/\.mdx/, ''),
      module: r(fileName),
    }))
}


export default function getAllPostPreviews() {
  return importAll(require.context('../pages/?preview', true, /\.mdx$/))
}
