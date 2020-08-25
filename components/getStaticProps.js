import { getAllPostPreviews } from './getPostPreviews'

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPostPreviews().map((post) => ({
        title: post.module.meta.title,
        link: post.link,
      })),
    },
  }
}
