import './App.css';
import AppRoutes from './routes/AppRoutes';
import AppNav from './components/AppNav';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <AppNav />
      <AppRoutes />
      <Post />
    </div>
  );
}

export default App;
