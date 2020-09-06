import ShortsList from '../components/ShortsList'
import { getAllPostPreviews } from '../components/PostPreviews'

const posts = getAllPostPreviews();

export default function shorts(){
  return (
    <div class='row-start-3 col-start-2 col-span-2'>
      <ShortsList content={posts} />
    </div>
  )
}
