import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreatePost from './Component/CreatePost';
import Post from './Component/Post';

function App() {
  return (
    < >
      <div className="container">
        <Routes>

          <Route path='/' element={<Post />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
