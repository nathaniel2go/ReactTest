import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { mockItems } from './portfolio';
import { useNavigate } from 'react-router-dom';

function FeaturedCarousel() {
    const carouselRef = useRef(null);
    const itemsRef = useRef([]);
    const navigate = useNavigate();

    useEffect(() => {
        const items = itemsRef.current;
        let currentIndex = 0;

        // Initial setup - hide all items except the first one
        gsap.set(items.slice(1), { opacity: 0, x: '100%' });
        gsap.set(items[0], { opacity: 1, x: '0%' });

        const rotateItems = () => {
            const nextIndex = (currentIndex + 1) % items.length;

            // Animate current item out
            gsap.to(items[currentIndex], {
                opacity: 0,
                x: '-100%',
                duration: 3,
                ease: 'power2.inOut'
            });

            // Animate next item in
            gsap.fromTo(items[nextIndex],
                { opacity: 0, x: '100%' },
                { opacity: 1, x: '0%', duration: 0.75, ease: 'power2.inOut' }
            );

            currentIndex = nextIndex;
        };

        const interval = setInterval(rotateItems, 3000); // Rotate every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const handleItemClick = (itemId) => {
        navigate('/portfolio');
        // You could also pass the specific item ID as a URL parameter if needed
        // navigate(`/portfolio?selected=${itemId}`);
    };

    return (
        <div className="featured-carousel" ref={carouselRef}>
            {mockItems.slice(0, 4).map((item, index) => (
                <div
                    key={item.id}
                    ref={el => itemsRef.current[index] = el}
                    className={`carousel-item ${item.quality.toLowerCase()}`}
                    onClick={() => handleItemClick(item.id)}
                    style={{ cursor: 'pointer' }}
                >
                    <h3>{item.name}</h3>
                    <div className="item-quality">{item.quality}</div>
                    <div className="item-subject">{item.subject}</div>
                </div>
            ))}
        </div>
    );
}

export default FeaturedCarousel;