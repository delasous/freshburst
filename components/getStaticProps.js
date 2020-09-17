import { getAllPostPreviews } from './PostPreviews'

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPostPreviews().map((post) => ({
        title: post.module.meta.title,
        id: post.module.meta.id,
        link: post.link,
      })),
    },
  }
}
