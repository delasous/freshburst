import ShortsList from '../components/ShortsList'
import { getAllPostPreviews } from '../components/PostPreviews'

const posts = getAllPostPreviews();

export default function shorts(){
  return (
    <div class='row-start-3 md:col-start-2 md:col-span-2'>
      <ShortsList content={posts} />
    </div>
  )
}
