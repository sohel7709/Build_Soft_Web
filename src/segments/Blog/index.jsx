import "./Blog.css";
import { blogPost } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef } from "react";
const Blog = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })
        .fromTo(
          [
           "#blog .section-header h3",
           "#blog .section-header h2",
           "#blog .blog-card"
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: container }
  );
  return (
    <section id="blog" ref={container}>
      <div className="container">
        <div className="section-header">
          <h3>Blog Post</h3>
          <h2>Insights and Innoations</h2>
        </div>
        <div className="blogs-grid">
          {blogPost.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="top">
                <img src={blog.image} alt="" />
              </div>
              <div className="bottom">
                <h3 className="line-clamp-2">{blog.title}</h3>
                <p className="line-clamp-3 description">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
