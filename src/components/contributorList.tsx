// src/components/ContributorsList.js
import React from "react";
// import contributors from '../data/contributors.json';

function ContributorsList({ title, contributors }: any) {
  return (
    <div>
      <h3>{title}</h3>
      <ul style={{ listStyleType: "none" }}>
        {contributors.map((contributor) => (
          <li key={contributor.id}>
            <img src={`${contributor.avatar_url}`} width="30" />
            <a
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                paddingLeft: "10px",
                lineHeight: "20px",
                marginBottom: "10px",
                top: "-10px",
                position: "relative",
              }}
            >
              {contributor.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContributorsList;
