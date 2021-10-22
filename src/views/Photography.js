import MyNav from '../components/MyNav';
import MyFooter from '../components/MyFooter';
import React, { useState } from "react";
import "../styles/photography.css";
function Photography() {
  const myId = "135184744@N03";
  const [rssUrl, setRssUrl] = useState(myId);
  const [entries, setEntries] = useState([]);

  const getRss = async (e) => {
    e.preventDefault();
    const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    const myId = "135184744@N03";
    let url = "https://www.flickr.com/services/feeds/photos_public.gne?id=" + rssUrl; 
    if (!urlRegex.test(url)) {
      return;
    }
    const res = await fetch(`https://api.allorigins.win/get?url=${url}`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    const entries = feed.querySelectorAll("entry");
    const feedEntries = [...entries].map((el) => ({
      id: el.querySelector("id").innerHTML,
      link: el.querySelectorAll("link")[1].getAttribute('href'),
      title: el.querySelector("title").innerHTML   
    }));
    setEntries(feedEntries);
  };

  return (
    <div className="Photography">
      <div><MyNav/></div>
      <form onSubmit={getRss}>
        <div>
          <label>Load your photos from Flickr</label>
          <br />
          <input onChange={(e) => setRssUrl(e.target.value)} value={rssUrl} />
        </div>
        <input type="submit" />
      </form>
      {entries.map((entry, index) => {
        return (
          <div className="card" key={index}>
            <h1>{entry.title}</h1>
            <img src={entry.link} style={{width:"60%"}}/>
          </div>
        );
      })}
    <div>
    <MyFooter/>
    </div>
    </div>


  );  
}

/**
 *   <div className="Photography">
      <div><MyNav/></div>
      <form onSubmit={getRss}>
        <div>
          <label>Load your photos from Flickr</label>
          <br />
          <input onChange={(e) => setRssUrl(e.target.value)} value={rssUrl} />
        </div>
        <input type="submit" />
      </form>
      {entries.map((entry, index) => {
        return (
          <div className="card" key={index}>
            <h1>{entry.title}</h1>
            <img src={entry.link} style={{width:"100%", height:"auto"}}/>
          </div>
        );
      })}
    <div>
    <MyFooter/>
    </div>
    </div>
 * 
 * 
*/
export default Photography;