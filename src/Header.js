import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import siteIcon from './images/siteicon.png';

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();
    const navigate = useNavigate();

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
        <header className="tf2-header">
            <div className="site-icon-container" onClick={() => navigate('/')}>
                <img src={siteIcon} alt="Site Icon" className="site-icon" />
            </div>
            <nav className="tf2-nav">
                <div className="tf2-dropdown" ref={dropdownRef}>
                    <button
                        className="tf2-btn"
                        onClick={() => setDropdownOpen((open) => !open)}
                        style={{ fontWeight: 'bold' }}
                    >
                        Find Game ▼
                    </button>
                    {dropdownOpen && (
                        <div className="tf2-dropdown-content">
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
    );
}

export default Header;
