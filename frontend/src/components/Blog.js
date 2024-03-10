import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const likePost = async (postId) => {
    try {
      // Implement your logic for liking a post
      // For example, send a request to your backend to update the likes for the post
      await axios.put(`http://localhost:9000/posts/${postId}/like`);
      // Fetch the updated posts after liking
      const response = await axios.get('http://localhost:9000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error liking post:', error.message);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Mock data for initial blog posts
        const mockData = [
          {
            _id: '1',
            title: 'Sample Blog Post 1',
            content: 'This is the content of the first blog post.',
            likes: 0,
            comments: [{ _id: '1', text: 'Great post!' }],
            image: 'https://example.com/image1.jpg', // Add the URL of the image
          },
          {
            _id: '2',
            title: 'Sample Blog Post 2',
            content: 'This is the content of the second blog post.',
            likes: 0,
            comments: [{ _id: '2', text: 'Interesting read!' }],
            image: 'https://example.com/image2.jpg', // Add the URL of the image
          },
        ];

        // Use the mock data to set initial state
        setPosts(mockData);

        // Uncomment the line below if you want to fetch posts from a backend
        // const response = await axios.get('http://localhost:9000/posts');
        // setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt={`Image for ${post.title}`} style={{ maxWidth: '100%' }} />
          <p>{post.content}</p>
          <p>Likes: {post.likes}</p>
          <ul>
            {post.comments.map((comment) => (
              <li key={comment._id}>{comment.text}</li>
            ))}
          </ul>
          <button onClick={() => likePost(post._id)}>Like</button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
