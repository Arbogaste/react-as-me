import MyNav from '../components/MyNav';

function Photography() {
    return (
      <div>
        <MyNav/>
        <div>
            {[...Array(10)].map((e, i) => <p key={i}>Lorem Ipsum</p>) }
        </div>
      </div>
  );
}

export default Photography;