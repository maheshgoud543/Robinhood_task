import { useState } from 'react';
import './WeatherStories.css';

const WeatherStories = () => {
    const [story, setStory] = useState("");
    const [stories, setStories] = useState([
        "Unexpected Weather Change - \"I was all set for a sunny day, but out of nowhere, dark clouds gathered, and it started pouring. It was a sudden change that caught everyone off guard, but we made the best of it by heading to a cozy cafe and enjoying the rain from indoors.\" - John Doe",
        "Heavy Rain in the Afternoon - \"We were having a great picnic when the sky suddenly turned gray. Within minutes, it was raining heavily. We quickly packed up and ran to the car, laughing all the way. It was unexpected, but it made the day memorable.\" - Jane Smith",
        "Sunny Day at the Beach - \"It was a perfect sunny day at the beach. The clear blue sky, warm sand, and gentle waves made it an ideal day for relaxation and fun. We played beach volleyball, swam in the sea, and ended the day with a beautiful sunset.\" - Alex Johnson"
    ]);

    const handleAdd = () => {
        if (story.trim() !== "") {
            const newStories = [...stories, story];
            setStories(newStories);
            setStory("");
        }
    }

    return (
        <div>
            <div className="WeatherStories">
                {stories.map((story, index) => (
                    <div key={index}>
                        <p>{story}</p>
                    </div>
                ))}
            </div>
            <div className='Ur_story'>
                <input
                    type='text'
                    placeholder='Add Your Story...'
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default WeatherStories;
