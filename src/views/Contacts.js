import MyNav from '../components/MyNav';

function Contacts() {
    return (
      <div>
        <MyNav/>
        <div>
        {[...Array(10)].map((e, i) => <p key={i}>Lorem Ipsum</p>) }
        </div>
      </div>
  );
}

export default Contacts;