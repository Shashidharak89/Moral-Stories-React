import React, { useState } from "react";
import stories from "./stories";
import "./styles/Story.css";

const Story = () => {
  const [openStoryId, setOpenStoryId] = useState(null);

  const toggleStory = (id) => {
    setOpenStoryId(openStoryId === id ? null : id);
  };

  return (
    <div className="story-page">
      <div className="story-container">
        {stories.map((story) => {
          const isOpen = openStoryId === story.id;

          return (
            <div key={story.id} className="story-card">
              {/* Title */}
              <button
                className={`story-title-btn ${isOpen ? "active" : ""}`}
                onClick={() => toggleStory(story.id)}
              >
                {story.title}
                <span className="story-arrow">{isOpen ? "−" : "+"}</span>
              </button>

              {/* Content */}
              <div className={`story-content ${isOpen ? "open" : ""}`}>
                {story.paragraphs.map((para, idx) => (
                  <React.Fragment key={idx}>
                    <p className="story-paragraph">{para}</p>

                    {story.imageurl?.[idx] && (
                      <div className="story-image-wrapper">
                        <img
                          src={story.imageurl[idx]}
                          alt={`${story.title} ${idx + 1}`}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Story;
