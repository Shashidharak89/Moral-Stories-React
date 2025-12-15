import React from "react";
import stories from "./stories";
import "./styles/Story.css";

const Story = () => {
  return (
    <div className="story-page">
      <div className="story-container">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <h2 className="story-title">{story.title}</h2>

            {story.paragraphs.map((para, idx) => (
              <React.Fragment key={idx}>
                <p className="story-paragraph">{para}</p>

                {story.imageurl?.[idx] && (
                  <div className="story-image-wrapper">
                    <img
                      src={story.imageurl[idx]}
                      alt={`${story.title} illustration ${idx + 1}`}
                      className="story-image"
                      loading="lazy"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}

            <div className="story-moral">
              <span>Moral:</span> {story.moral}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
