import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';

import PostLayout from './PostLayout';

const Post = function({  children, meta, posts }){
  const router = useRouter();

  const unseenPosts = useStoreState(state => state.posts.toRead(posts));
  const markAsRead = useStoreActions(actions => actions.posts.addReadPost);

  const currentPost = posts.find((post) => {
    if(post.link === router.pathname) return post;
  });
  const minusCurrent = unseenPosts.filter((x) => x.id !== currentPost.id);

  const randomUnseenIndex = (max => {
      return ( Math.floor(Math.random() * max) )
    })(minusCurrent.length);

  const next = minusCurrent[randomUnseenIndex] || {link: '/'};

  //returned to fire on dismount
  useEffect(() => {
    return () => {
      markAsRead(currentPost.id);
    }
  }, []);

  return(
    <PostLayout children={children} meta={meta} next={next} />
  )
}

export default Post;