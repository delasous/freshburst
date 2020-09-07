function importAll(r) {
  return r
    .keys()
    .map((fileName) => ({
      link: fileName.replace(/\.mdx|\./g, ''),
      module: r(fileName),
    }))
}

function randomSlice(p) {
  return (
    p.map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .slice(0,5)
 )
}

export function getAllPostPreviews() {
  return importAll(require.context('../pages/?preview', true, /\.mdx$/));
}

export function getRandomPostPreviews() {
  return randomSlice( getAllPostPreviews() );
}
