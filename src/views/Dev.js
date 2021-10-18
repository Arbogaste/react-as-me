import MyNav from '../components/MyNav';
import MyFooter from '../components/MyFooter';
function Dev() {
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

export default Dev;