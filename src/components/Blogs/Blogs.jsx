import React from 'react'
import './Blogs.css'
import useIntersectionObserver from '../../utils/IntersectionObserver'
import leftObserver from '../../utils/LeftObserver'

const Blogs = () => {

  useIntersectionObserver()
  leftObserver()

  const allBlogs = [
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
    { title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-1-1'},
  ]


  return (
    <div className="blogs">
      <div className="container content">
        <div className="blog-grid-container">
          {allBlogs.map((blog, index) => {
            return (
              <div className="blog-item blog-hidden" key={index}>
                <h1>
                  <a href={blog.href} target='_blank'>{blog.title}</a>
                </h1>
                <p>{blog.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Blogs
