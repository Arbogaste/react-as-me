import MyNav from '../components/MyNav';
import MyFooter from '../components/MyFooter';
function Contacts() {
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

export default Contacts;