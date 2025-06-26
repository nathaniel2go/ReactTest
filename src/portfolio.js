import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './portfolio.css';

export const mockItems = [
  {
    id: 1,
    name: 'Project Alpha',
    quality: 'Gold',
    subject: 'Web',
    keywords: ['react', 'frontend', 'spa']
  },
  {
    id: 2,
    name: 'Project Beta',
    quality: 'Silver',
    subject: 'API',
    keywords: ['node', 'express', 'backend']
  },
  {
    id: 3,
    name: 'Project Gamma',
    quality: 'Bronze',
    subject: 'Mobile',
    keywords: ['react native', 'mobile', 'app']
  },
  {
    id: 4,
    name: 'Project Delta',
    quality: 'Gold',
    subject: 'Data',
    keywords: ['python', 'ml', 'data']
  },
  // Add more items as needed
];

const qualities = ['All', 'Gold', 'Silver', 'Bronze'];
const subjects = ['All', 'Web', 'API', 'Mobile', 'Data'];

function Portfolio() {
  const [quality, setQuality] = useState('All');
  const [subject, setSubject] = useState('All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  // Filtering logic
  const filtered = mockItems.filter(item =>
    (quality === 'All' || item.quality === quality) &&
    (subject === 'All' || item.subject === subject) &&
    (search === '' ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.keywords && item.keywords.some(k => k.toLowerCase().includes(search.toLowerCase()))))
  );

  // Pagination logic (4x2 grid)
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const pagedItems = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
      <div className="portfolio-page">
        <Header />
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h2 className="portfolio-title">Portfolio</h2>
            <div className="portfolio-filters">
              <select value={quality} onChange={e => setQuality(e.target.value)}>
                {qualities.map(q => <option key={q} value={q}>{q}</option>)}
              </select>
              <select value={subject} onChange={e => setSubject(e.target.value)}>
                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <input
                className="portfolio-search"
                type="text"
                placeholder="Search by keyword..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
          </div>

          <button
          className="tf2-btn"
          style={{ marginLeft: 16 }}
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
      <div className="portfolio-grid">
        {pagedItems.map(item => (
          <div
            key={item.id}
            className={`portfolio-item${selected === item.id ? ' selected' : ''}`}
            onClick={() => setSelected(item.id)}
          >
            <div className={`item-quality ${item.quality?.toLowerCase()}`}>{item.quality}</div>
            <div className="item-name">{item.name}</div>
            <div className="item-subject">{item.subject}</div>
          </div>
        ))}
        {Array.from({ length: itemsPerPage - pagedItems.length }).map((_, i) => (
          <div key={`empty-${i}`} className="portfolio-item empty"></div>
        ))}
      </div>
      <div className="portfolio-footer">
        <button
          className="portfolio-scroll"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          &lt; Prev
        </button>
        <span className="portfolio-page">{page} / {totalPages || 1}</span>
        <button
          className="portfolio-scroll"
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages || totalPages === 0}
        >
          Next &gt;
        </button>
        <button
          className="portfolio-details"
          disabled={selected === null}
          onClick={() => alert(`Details for: ${mockItems.find(i => i.id === selected)?.name}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default Portfolio;