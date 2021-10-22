import MyFooter from '../components/MyFooter';
import MyNav from '../components/MyNav';

function Home() {
    return (
      <div>
        <MyNav/>
        <div>
          <p>This is my</p>
          <p className="strikeout">experimental webapp</p>
          <p>professional portfolio</p>
        </div>
        <MyFooter/>
      </div>
  );
}

export default Home;