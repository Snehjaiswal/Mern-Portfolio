import { Button } from "react-bootstrap";
import "./Blog.scss";

function blogLinkClick(link) {
  const url = link;
  window.open(url, "_blank");
}

function Blog() {
  return (
    <div className="Blog" id="blogs">
      <h1 className="about-header" style={{ textAlign: "center" }}>
        Blogs
      </h1>
      <hr
        className="divider"
        style={{
          margin: "auto"
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0 auto"
        }}
      >
        {/* <div
          style={{ display: "flex", flexDirection: "row", width: "40rem" }}
          className="blog-layout"
        >
          <img
            className="blog-image"
            src="images/blog2.png"
            alt="Noteslfix"
            height="200"
            width="200"
          />
          <span className="blog-body">
            <h4 className="blog-title">
              Smallest Positive Missing Number in an Unsorted Array in C++
            </h4>
            <p className="blog-desc">
              We have an array consisting of negative and positive numbers, we
              have to finding the smallest missing positive number from the
              given array...
            </p>
            <Button
              className="urls"
              onClick={() => {
                blogLinkClick(
                  "https://samflab.medium.com/smallest-positive-missing-number-in-an-unsorted-array-8f8a0439fb09"
                );
              }}
            >
              Read More
            </Button>
          </span>
        </div> */}
        {/* <div
          style={{ display: "flex", flexDirection: "row", width: "40rem" }}
          className="blog-layout"
        >
          <img
            className="blog-image"
            src="images/blog1.png"
            alt="Noteslfix"
            height="200"
            width="200"
          />
          <span className="blog-body">
            <h4 className="blog-title">
              Inserting Node into a Sorted Doubly Linked List
            </h4>
            <p className="blog-desc">
              Recently, I was solving some coding questions on Hackerrank and I
              came across this problem. I realised that this problem lacked...
            </p>
            <Button
              className="urls"
              onClick={() => {
                blogLinkClick(
                  "https://samflab.medium.com/inserting-node-into-a-sorted-doubly-linked-list-67c638c4ec21"
                );
              }}
            >
              Read More
            </Button>
          </span>
        </div> */}
        {/* <div
          style={{ display: "flex", flexDirection: "row", width: "40rem" }}
          className="blog-layout"
        >
          <img
            className="blog-image"
            src="images/blog3.jpeg"
            alt="Noteslfix"
            height="200"
            width="200"
          />
          <span className="blog-body">
            <h4 className="blog-title">Responsive Text in Flutter</h4>
            <p className="blog-desc">
              Have you ever come across a situation where you realized you have
              to resize your text according to different screen sizes?
              Unfortunately...
            </p>
            <Button
              className="urls"
              onClick={() => {
                blogLinkClick(
                  "https://samflab.medium.com/responsive-text-in-flutter-744fc830a9cd"
                );
              }}
            >
              Read More
            </Button>
          </span>
        </div> */}
        <div
          style={{ display: "flex", flexDirection: "row", width: "40rem" }}
          className="blog-layout"
        >
          <img
            className="blog-image"
            src="https://miro.medium.com/max/875/0*iGLAJ1yZS9ba_ssY"
            alt="Noteslfix"
            height="200"
            width="200"
          />
          <span className="blog-body">
            <h4 className="blog-title">Our Train of Thoughts</h4>
            <p className="blog-desc">
              It might seem like a vague question but have you ever put some
              thought into it? Being consumed by our thoughts and our thoughts
              consuming us...
            </p>
            <Button
              className="urls"
              onClick={() => {
                blogLinkClick(
                  "https://samflab.medium.com/us-and-our-thoughts-76321f6a7801"
                );
              }}
            >
              Read More
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
