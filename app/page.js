'use client';

import { useState } from 'react';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    {
      title: '🛍️ Shop Our Collection',
      url: 'https://linktr.ee/baghavendubai',
      description: 'Browse our premium luxury bags'
    },
    {
      title: '📱 WhatsApp Us',
      url: 'https://wa.me/971501234567',
      description: 'Get instant assistance'
    },
    {
      title: '📧 Email Contact',
      url: 'mailto:info@baghavendubai.com',
      description: 'Send us your inquiries'
    },
    {
      title: '📍 Visit Our Store',
      url: 'https://maps.google.com',
      description: 'Dubai, UAE'
    },
    {
      title: '⭐ Customer Reviews',
      url: '#reviews',
      description: 'See what our clients say'
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.background}></div>

      <main style={styles.main}>
        <div style={styles.card}>
          {/* Profile Section */}
          <div style={styles.profileSection}>
            <div style={styles.avatarContainer}>
              <div style={styles.avatar}>BH</div>
            </div>
            <h1 style={styles.title}>BagHaven Dubai</h1>
            <p style={styles.subtitle}>Premium Luxury Handbags & Accessories</p>
            <p style={styles.description}>
              ✨ Authentic Designer Bags<br/>
              🌟 Dubai's Trusted Source<br/>
              💎 Quality Guaranteed
            </p>
          </div>

          {/* Links Section */}
          <div style={styles.linksContainer}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                style={{
                  ...styles.link,
                  ...(hoveredIndex === index ? styles.linkHover : {})
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={styles.linkContent}>
                  <div style={styles.linkTitle}>{link.title}</div>
                  <div style={styles.linkDescription}>{link.description}</div>
                </div>
                <svg
                  style={styles.arrow}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7 4L13 10L7 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* Footer */}
          <footer style={styles.footer}>
            <p style={styles.footerText}>© 2024 BagHaven Dubai. All rights reserved.</p>
            <div style={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                Instagram
              </a>
              <span style={styles.separator}>•</span>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                Facebook
              </a>
              <span style={styles.separator}>•</span>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                TikTok
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    position: 'relative',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    zIndex: -1,
  },
  main: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '24px',
    padding: '40px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
  },
  profileSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'white',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 10px 0',
    color: '#1a202c',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#667eea',
    margin: '0 0 15px 0',
    fontWeight: '600',
  },
  description: {
    fontSize: '15px',
    color: '#4a5568',
    lineHeight: '1.8',
    margin: '0',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px',
    backgroundColor: 'white',
    border: '2px solid #e2e8f0',
    borderRadius: '16px',
    textDecoration: 'none',
    color: '#1a202c',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  linkHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
    borderColor: '#667eea',
  },
  linkContent: {
    flex: 1,
    textAlign: 'left',
  },
  linkTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '4px',
  },
  linkDescription: {
    fontSize: '13px',
    color: '#718096',
  },
  arrow: {
    color: '#667eea',
    transition: 'transform 0.3s ease',
  },
  footer: {
    textAlign: 'center',
    paddingTop: '30px',
    borderTop: '1px solid #e2e8f0',
  },
  footerText: {
    fontSize: '13px',
    color: '#718096',
    margin: '0 0 12px 0',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  socialLink: {
    fontSize: '13px',
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s ease',
  },
  separator: {
    color: '#cbd5e0',
  },
};
