import React, { useEffect, useState } from "react";
import { parseString } from "xml2js";
import Styles from "./latest-episode.styled";
import { stripHtmlTags } from "../../helpers";
import { Link } from "gatsby";
import Inner from "../inner/inner";
import SubButton from "../subscribeButton/subButton";

const LatestEpisode = () => {
  const [podcastData, setPodcastData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://feed.podbean.com/jasonft/feed.xml"
        );
        const data = await response.text();
        parseXML(data);
      } catch (error) {
        console.error("Error fetching XML:", error);
      }
    };

    fetchData();
  }, []);

  const parseXML = (xmlData) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        console.error("Error parsing XML:", err);
      } else {
        console.log("Parsed XML:", result);
        setPodcastData(result);
      }
    });
  };

  const formatDateString = (dateString) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <Styles>
      <div>
        {podcastData &&
          podcastData.rss.channel.map((podcast, index) => {
            const latestEpisode = podcast.item[0];
            const itunesEpisode = latestEpisode["itunes:episode"]
              ? latestEpisode["itunes:episode"][0]
              : null;
            const pubDate = latestEpisode.pubDate
              ? formatDateString(latestEpisode.pubDate[0])
              : null;

            const fullDescription = latestEpisode.description.toString();
            const truncatedDescription = fullDescription.length > 200 
              ? fullDescription.substring(0, 200) + "..." 
              : fullDescription;

            return (
              <Inner key={index}>
                <h2 className="latest-heading">Latest Podcast Episode</h2>
                <div className="episode">
                  <div className="episode-info-date">
                    <p className="episode-number">EPISODE {itunesEpisode}</p>
                    <p className="episode-date">{pubDate}</p>
                  </div>
                  <h1 className="podcast-heading">{latestEpisode.title}</h1>

                  <p
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: isExpanded ? fullDescription : truncatedDescription,
                    }}
                  />

                  {fullDescription.length > 200 && (
                    <button 
                      className="read-more-btn" 
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  )}

                  <div id="audio-player">
                    <audio controls>
                      <source
                        src={latestEpisode.enclosure[0].$.url}
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio tag.
                    </audio>
                  </div>
                  <p className="see-all-btn">
                    <Link to="/episodes">See All Episodes</Link>
                  </p>
                </div>
                <div className="sub-btns">
                  <SubButton
                    color="black"
                    listen={false}
                    icon="fa-solid fa-podcast"
                    platform="Apple"
                    backgroundHover="#d56dfb"
                    backgroundHover2="#872ec4"
                    to="https://podcasts.apple.com/us/podcast/overwhelmed-gamer/id1752872724"
                  />
                  <SubButton
                    listen={false}
                    color="black"
                    backgroundHover="#1DB954"
                    icon="fa-brands fa-spotify"
                    platform="Spotify"
                    to="https://open.spotify.com/show/2QjYq0AzmWPuqLz6kTZIht"
                  />
                </div>
              </Inner>
            );
          })}
      </div>
    </Styles>
  );
};

export default LatestEpisode;
