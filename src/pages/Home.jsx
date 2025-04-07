import React from 'react'
import Layout from '../components/Layout'
import Section from './Section'

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-4">
        <section className="showcase">
          <div className="overlay" />
          <div className="container">
            <div className="content">
              <h1>Your Digital Study Companion</h1>
              <p className='text' style={{color: 'white'}}>
                Access thousands of books, research papers, and study materials to enhance your learning journey.
                Access thousands of books, research papers, and study materials to enhance your learning journey.

              </p>
              <div className="btn-g">
                <button class="btn btn-primary">Get Started 🎓</button>
                <button class="btn btn-outline">Browse Library 📖</button>
              </div>
            </div>
          </div>
        </section>
       <br />
        <Section />
        <section className="search-section">
          <div className="r-container">
            <div className="content">
              <div className="heading">
                <h2>Find Your Next Study Resource</h2>
                <p>Search through our extensive collection of academic resources</p>
              </div>
              <div className="search-box">
                <div className="input-wrapper">
                  <span className="search-icon">🔍</span>
                  <input type="search" className="search-input" placeholder="Search by title, author, or subject..." />
                </div>
                <button className="search-button">Search Library</button>
              </div>
            </div>
          </div>
        </section>
         
      </div>
    </Layout>
  )
}

export default Home
