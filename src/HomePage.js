import React from 'react';
import Header from './Header';
import PlayerDetails from './PlayerDetails';
import FeaturedCarousel from './FeaturedCarousel';
import './HomePage.css';

function HomePage({ onInventoryClick }) {
    return (
        <div className="home-background">
            <Header />
            <main className="tf2-main-body">
                <div className="tf2-logo-section">
                    <img src="/tf2logo.png" alt="TF2 Logo" className="tf2-logo" />
                </div>
                <div className="tf2-badge-progress">
                    <PlayerDetails
                        name="Nathaniel Go"
                        program="Systems Design Engineering @ U of Waterloo"
                        progress={20}
                    />
                </div>
                <div className="tf2-featured">
                    <h2>Featured</h2>
                    <FeaturedCarousel />
                </div>
                <div className="tf2-friends">
                    <h2>Friends</h2>
                    <div className="friends-list">[Friends List]</div>
                </div>
            </main>
            <div className="home-bottom-footer">
                <div className="footer-group-left">
                    <button className="footer-btn" onClick={onInventoryClick}>Portfolio</button>
                    <button className="footer-btn">Shop</button>
                </div>
                <div className="footer-group-right">
                    <button className="footer-btn">Settings</button>
                    <button className="footer-btn">Logout</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;