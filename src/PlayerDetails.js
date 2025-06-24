import React from 'react';
import './PlayerDetails.css';

function PlayerDetails({ name, program, progress }) {
    return (
        <div className="player-details">
            <div className="player-avatar">
                <img src="/avatar-placeholder.png" alt="Player Avatar" />
            </div>
            <div className="player-info">
                <h3 className="player-name">{name}</h3>
                <p className="player-program">{program}</p>
                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="progress-glow"></div>
                    </div>
                    <span className="progress-text">{`${progress}% Complete`}</span>
                </div>
            </div>
        </div>
    );
}

export default PlayerDetails;
