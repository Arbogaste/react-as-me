import MyNav from '../components/MyNav';

function Dev() {
    return (
      <div>
        <MyNav/>
        <div>
        {[...Array(10)].map((e, i) => <p key={i}>Lorem Ipsum</p>) }
        </div>
      </div>
  );
}

export default Dev;