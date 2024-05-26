import React, { useEffect, useState } from "react";
import { parseString } from "xml2js";
import Styles from "./latest-episode.styled";
import { stripHtmlTags } from "../../helpers";
import { Link } from "gatsby";

const LatestEpisode = () => {
  const [podcastData, setPodcastData] = useState(null);

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
        // Process the parsed result (result) here
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

            console.log(latestEpisode);
            return (
              <div className='episode' key={index}>
                <div className='episode-info-date'>
                  <p className='episode-number'>EPISODE {itunesEpisode}</p>
                  <p className='episode-date'>{pubDate}</p>
                </div>
                <h1 className='podcast-heading'>{latestEpisode.title}</h1>
                <p
                  className='description'
                  dangerouslySetInnerHTML={{
                    __html: latestEpisode.description.toString(),
                  }}
                />

                <div id='audio-player'>
                  <audio controls>
                    <source
                      src={latestEpisode.enclosure[0].$.url}
                      type='audio/mpeg'
                    />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
                <p className='see-all-btn'>
                  <Link to='/episodes'>See All Episodes</Link>
                </p>
              </div>
            );
          })}
      </div>
    </Styles>
  );
};

export default LatestEpisode;
