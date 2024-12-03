"use client";

import { useState, useEffect } from "react";

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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post submission here
    console.log("New post:", newPost);
    setIsModalOpen(false);
    setNewPost({ title: "", url: "", text: "" });
  };

  return (
    <div
      className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-200"
      data-oid="_clmlxx"
    >
      <header
        className="bg-[#ff6600] dark:bg-[#cc5200] px-2 py-2 transition-colors duration-200"
        data-oid="h:8bye4"
      >
        <div
          className="max-w-5xl mx-auto flex items-center gap-4"
          data-oid="kh2acvi"
        >
          <span
            className="font-bold text-black dark:text-white"
            data-oid="qvr1mz6"
          >
            HN
          </span>
          <nav className="flex gap-4 text-sm" data-oid="uetkpes">
            <a
              href="#"
              className="text-black dark:text-white hover:underline"
              data-oid="wyhxncj"
            >
              new
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:underline"
              data-oid="z88f63."
            >
              past
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:underline"
              data-oid="f:eq1zv"
            >
              comments
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:underline"
              data-oid="oke_gj2"
            >
              ask
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:underline"
              data-oid="0c8.8hq"
            >
              show
            </a>
            <a
              href="#"
              className="text-black dark:text-white hover:underline"
              data-oid="vbb-lre"
            >
              jobs
            </a>
          </nav>
          <div className="ml-auto flex gap-4 items-center" data-oid="efj61ju">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-[#ff7700] dark:hover:bg-[#dd6000] transition-colors"
              data-oid="fo-s9x:"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-1 bg-[#ff6600] dark:bg-[#cc5200] border border-black dark:border-white text-sm hover:bg-[#ff7700] dark:hover:bg-[#dd6000] transition-colors text-black dark:text-white"
              data-oid="rx:h8.h"
            >
              submit
            </button>
          </div>
        </div>
      </header>

      {/* Submit Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          data-oid="aa0-4jx"
        >
          <div
            className="bg-[#f6f6ef] dark:bg-gray-800 p-6 rounded-lg w-full max-w-xl mx-4"
            data-oid="gkbk98i"
          >
            <h2 className="text-xl mb-4 dark:text-white" data-oid="6_n1oux">
              Submit
            </h2>
            <form onSubmit={handleSubmit} data-oid="c7zxeyo">
              <div className="space-y-4" data-oid="590i9mk">
                <div data-oid="zcaa50g">
                  <label
                    className="block text-sm mb-1 dark:text-white"
                    data-oid="z0or3li"
                  >
                    title
                  </label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) =>
                      setNewPost({ ...newPost, title: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    required
                    data-oid=".s.xn.f"
                  />
                </div>
                <div data-oid="1j__1mt">
                  <label
                    className="block text-sm mb-1 dark:text-white"
                    data-oid="5:70rd6"
                  >
                    url
                  </label>
                  <input
                    type="url"
                    value={newPost.url}
                    onChange={(e) =>
                      setNewPost({ ...newPost, url: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    data-oid="5s7no87"
                  />
                </div>
                <div data-oid="4jbq2ks">
                  <label
                    className="block text-sm mb-1 dark:text-white"
                    data-oid="i6g-10g"
                  >
                    text
                  </label>
                  <textarea
                    value={newPost.text}
                    onChange={(e) =>
                      setNewPost({ ...newPost, text: e.target.value })
                    }
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white h-32"
                    data-oid="e4ekq4u"
                  />
                </div>
                <div className="flex gap-4" data-oid="jz9jjh9">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#ff6600] dark:bg-[#cc5200] text-black dark:text-white hover:bg-[#ff7700] dark:hover:bg-[#dd6000]"
                    data-oid="xupdihj"
                  >
                    submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                    data-oid="vot1-:j"
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
      <main className="max-w-5xl mx-auto pt-2 px-2 w-4/5" data-oid="2:d-kth">
        <ol
          className="list-decimal list-inside items-center"
          data-oid="dtg4rgn"
        >
          {posts.map((post) => (
            <li
              key={post.id}
              className="py-2 flex-row list-item"
              data-oid="_j_h-j3"
            >
              <div className="inline-block" data-oid="9ms81gt">
                <h2
                  className="inline text-sm hover:underline"
                  data-oid="sycq035"
                >
                  <a
                    href="#"
                    className="visited:text-gray-600 text-black dark:text-white"
                    data-oid="1ftj4iq"
                  >
                    {post.title}
                  </a>
                </h2>
                <div
                  className="text-xs text-gray-500 dark:text-gray-400"
                  data-oid="861heo-"
                >
                  {post.points} points by {post.author} {post.timeAgo} |
                  <a
                    href="#"
                    className="hover:underline ml-1"
                    data-oid="os7ixe6"
                  >
                    {post.commentCount} comments
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </main>

      {/* Footer */}
      <footer
        className="max-w-5xl mx-auto mt-auto border-t border-[#ff6600] dark:border-[#cc5200] py-4 text-xs text-center text-gray-500 dark:text-gray-400 w-full"
        data-oid="furqtmf"
      >
        <nav className="space-x-4" data-oid="4cc6d0v">
          <a href="#" className="hover:underline" data-oid="xnew2f3">
            Guidelines
          </a>
          <a href="#" className="hover:underline" data-oid="da-y4.t">
            FAQ
          </a>
          <a href="#" className="hover:underline" data-oid="mv0nn3h">
            API
          </a>
          <a href="#" className="hover:underline" data-oid="qd:p_te">
            Security
          </a>
          <a href="#" className="hover:underline" data-oid="-cbu3oq">
            Lists
          </a>
          <a href="#" className="hover:underline" data-oid=":2s6tyc">
            Bookmarklet
          </a>
          <a href="#" className="hover:underline" data-oid="ts.t61r">
            Legal
          </a>
          <a href="#" className="hover:underline" data-oid="bpn.rgr">
            Apply to YC
          </a>
          <a href="#" className="hover:underline" data-oid="hv55a_f">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}
