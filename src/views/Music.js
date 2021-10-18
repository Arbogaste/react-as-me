import MyNav from '../components/MyNav';
import MyFooter from '../components/MyFooter';
function Music() {
    return (
      <div>
        <MyNav/>
        <div>
            {[...Array(10)].map((e, i) => <p key={i}>Lorem Ipsum</p>) }
        </div>
        <MyFooter/>

      </div>
  );
}

export default Music;