import React, { useState } from 'react';
import stories from './stories';
const Story = () => {
  const [data, setData] = useState(stories);
  console.log(stories);
  return (
    <div>
      <div>
        {data.map((item) => (
          <div key={item.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <img src={item.imageurl} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <h3>{item.title}</h3>
            <p>{item.story}</p>
            <strong>Moral: {item.moral}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Story;