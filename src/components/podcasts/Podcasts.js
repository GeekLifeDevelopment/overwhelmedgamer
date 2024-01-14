import React, { useEffect, useState } from "react";
import { parseString } from "xml2js";
import Styles from "./Podcasts.styled";
import { stripHtmlTags } from "../../helpers";

const Podcasts = () => {
  const [podcastData, setPodcastData] = useState(null);
  const [description, setDescription] = useState(true);

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

  const ToggleDescription = () => {
    description ? setDescription(false) : setDescription(true);
  };

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
  {
    console.log(podcastData);
  }
  return (
    <Styles description={description}>
      <div>
        {podcastData &&
          podcastData.rss.channel.map((podcast, index) =>
            podcast.item.map((episode, episodeIndex) => (
              <div className='episode' key={episodeIndex}>
                <h3 className='episode-title'>{episode.title}</h3>
                <p className='description'>
                  {stripHtmlTags(episode.description.toString())}
                </p>
                {!description && (
                  <p onClick={ToggleDescription} className='show'>
                    Show Description
                  </p>
                )}
                {description && (
                  <p onClick={ToggleDescription} className='show'>
                    Hide Description
                  </p>
                )}
                <audio controls>
                  <source src={episode.enclosure[0].$.url} type='audio/mpeg' />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            ))
          )}
      </div>
    </Styles>
  );
};

export default Podcasts;
