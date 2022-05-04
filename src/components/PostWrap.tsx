import LoginCheck from './LoginCheck';
import Search from './search';
import TopPost from './TopPost';
import MyPost from './MyPost';
import GetPost from './GetPost';

function PostWrap() {
  return (
    <>
      <LoginCheck />
      <Search />
      <TopPost />
      <MyPost />
      <GetPost />
    </>
  );
}

export default PostWrap;
