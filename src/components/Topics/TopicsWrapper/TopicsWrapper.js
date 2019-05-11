import React from 'react';

const TopicsWrapper = ({topics, selectTopic}) => {
    return(
        <div className="topic__wrapper">
            {
                Object.keys(topics).map((topic) => {
                    const topicObject = topics[topic]
                    console.log(topicObject);
                    return (
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            selectTopic(topic);
                        }} className={`topic__element ${topicObject.selected ? 'topic__element--active' : ''}`} key={topic} style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + topicObject.background + ')'}}><span>Start with your first topic: {topicObject.name} <br/><span>~ {topicObject.duration} min</span></span></a>
                    )
                })
        }
        </div>
    );
}
export default TopicsWrapper;