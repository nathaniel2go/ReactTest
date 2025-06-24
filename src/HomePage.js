import React, { useState, useRef, useEffect } from 'react';
import './HomePage.css';
import PlayerDetails from './PlayerDetails';


function HomePage({ onInventoryClick }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="home-background">
            <header className="tf2-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 className="tf2-title" style={{ marginLeft: 24 }}>TEAM FORTRESS 2</h1>
                <nav className="tf2-nav" style={{ marginLeft: 'auto', marginRight: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className="tf2-dropdown" ref={dropdownRef} style={{ position: 'relative' }}>
                        <button
                            className="tf2-btn"
                            onClick={() => setDropdownOpen((open) => !open)}
                            style={{ fontWeight: 'bold' }}
                        >
                            Find Game ▼
                        </button>
                        {dropdownOpen && (
                            <div className="tf2-dropdown-content" style={{ right: 0, left: 'auto', minWidth: 180 }}>
                                <button className="tf2-btn" disabled>Casual (coming soon)</button>
                                <button className="tf2-btn" disabled>Competitive (coming soon)</button>
                            </div>
                        )}
                    </div>
                    <button
                        className="tf2-btn"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '1.3rem',
                            padding: '8px 16px',
                            background: '#a83232'
                        }}
                        title="Power"
                        onClick={() => window.close()}
                    >
                        <span role="img" aria-label="Power" style={{ fontSize: '1.5em' }}>⏻</span>
                    </button>
                </nav>
            </header>
            <main className="tf2-main-body">
                <div className="tf2-logo-section">
                    <img src="/tf2logo.png" alt="TF2 Logo" className="tf2-logo" />
                </div>
                <div className="tf2-badge-progress">
                    <PlayerDetails
                        name="Engineer Gaming"
                        program="Computer Science"
                        progress={75}
                    />
                </div>
                <div className="tf2-featured">
                    <h2>Featured</h2>
                    <div className="featured-content">[Featured Content]</div>
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