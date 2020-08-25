function importAll(r) {
  return r
    .keys()
    .map((fileName) => ({
      link: fileName.replace(/\.mdx/, ''),
      module: r(fileName),
    }))
}

function randomSlice(p) {
  return (
    p.map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .slice(0,3)
 )
}


export default function getAllPostPreviews() {
  return randomSlice( importAll(require.context('../pages/?preview', true, /\.mdx$/)) );
}
