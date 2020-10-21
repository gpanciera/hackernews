import React from 'react';

const Results = ({ data, isLoading, isError }) => {
  return (
    <div className="results">
      { isLoading ? "Loading..." : 
        data && data.hits && data.hits.map((elem, i) => {
          if(elem && elem.story_title && elem.story_url && elem.objectID && elem.created_at) {
            return (
              <div className="news-item" key={elem.objectID + "div"}>
                <a href={elem.story_url} key={elem.objectID} target="new">
                  {elem.story_title}
                </a>
                <span>{" - "}</span>
                <span>{elem.created_at}</span>
              </div>
            )
          }
          else return null;
        })
      }
    </div>
  )
}

export default Results;