import React, { useState } from 'react';
import stories from './stories';
const Story = () => {
  const [data, setData] = useState(stories);
  console.log(stories);
  return (
    <div>
      <div>
        {data.map((curElem) => {
          const { id, title, paragraphs, moral, imageurl } = curElem;
          return (
            <div key={id}>
              <h2>{title}</h2>
              <img src={imageurl} alt={title} style={{ width: '300px', height: '200px' }} />
              {paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
              <h4>Moral: {moral}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Story;