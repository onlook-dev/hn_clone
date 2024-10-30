"use client";

import { useState } from "react";

// Mock data for HN posts
const posts = [
  {
    id: 1,
    title: "Show HN: I built a new programming language",
    points: 284,
    author: "developer123",
    timeAgo: "3 hours ago",
    commentCount: 142,
  },
  {
    id: 2,
    title: "Why React is still relevant in 2024",
    points: 156,
    author: "reactfan",
    timeAgo: "5 hours ago",
    commentCount: 98,
  },
  {
    id: 3,
    title: "The future of AI: A comprehensive analysis",
    points: 342,
    author: "airesearcher",
    timeAgo: "7 hours ago",
    commentCount: 215,
  },
];

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", url: "", text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post submission here
    console.log("New post:", newPost);
    setIsModalOpen(false);
    setNewPost({ title: "", url: "", text: "" });
  };

  return (
    <div className="min-h-screen bg-[#f6f6ef] flex flex-col">
      <header className="bg-[#ff6600] px-2 py-2">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <span className="font-bold text-black">HN</span>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-black hover:underline">
              new
            </a>
            <a href="#" className="text-black hover:underline">
              past
            </a>
            <a href="#" className="text-black hover:underline">
              comments
            </a>
            <a href="#" className="text-black hover:underline">
              ask
            </a>
            <a href="#" className="text-black hover:underline">
              show
            </a>
            <a href="#" className="text-black hover:underline">
              jobs
            </a>
          </nav>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-1 bg-[#ff6600] border border-black text-sm hover:bg-[#ff7700] transition-colors ml-auto"
          >
            submit
          </button>
        </div>
      </header>

      {/* Submit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-[#f6f6ef] p-6 rounded-lg w-full max-w-xl mx-4">
            <h2 className="text-xl mb-4">Submit</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">title</label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) =>
                      setNewPost({ ...newPost, title: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">url</label>
                  <input
                    type="url"
                    value={newPost.url}
                    onChange={(e) =>
                      setNewPost({ ...newPost, url: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">text</label>
                  <textarea
                    value={newPost.text}
                    onChange={(e) =>
                      setNewPost({ ...newPost, text: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 h-32"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#ff6600] text-black hover:bg-[#ff7700]"
                  >
                    submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 text-black hover:bg-gray-300"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="max-w-5xl mx-auto pt-2 px-2 w-4/5">
        <ol className="list-decimal list-inside items-center">
          {posts.map((post) => (
            <li key={post.id} className="py-2 flex-row list-item">
              <div className="inline-block">
                <h2 className="inline text-sm hover:underline">
                  <a href="#" className="visited:text-gray-600 text-black">
                    {post.title}
                  </a>
                </h2>
                <div className="text-xs text-gray-500">
                  {post.points} points by {post.author} {post.timeAgo} |
                  <a href="#" className="hover:underline ml-1">
                    {post.commentCount} comments
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-auto border-t border-[#ff6600] py-4 text-xs text-center text-gray-500 w-full">
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Guidelines
          </a>
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            API
          </a>
          <a href="#" className="hover:underline">
            Security
          </a>
          <a href="#" className="hover:underline">
            Lists
          </a>
          <a href="#" className="hover:underline">
            Bookmarklet
          </a>
          <a href="#" className="hover:underline">
            Legal
          </a>
          <a href="#" className="hover:underline">
            Apply to YC
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}
