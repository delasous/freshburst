import ShortsList from '../components/ShortsList'
import { getAllPostPreviews } from '../components/PostPreviews'

const posts = getAllPostPreviews();

export default function shorts(){
  return (
    <ShortsList content={posts} />
  )
}
