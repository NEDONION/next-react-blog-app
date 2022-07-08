import type { NextPage } from 'next';
import Post from 'pages/post';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="content-layout">
        <Post />
      </div>
      <p>This is the home page</p>
    </div>
  );
};
export default Home;
