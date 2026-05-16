import React from 'react';
import Navbar from '../components/layout/Navbar';
import ContestBanner from '../components/common/ContestBanner ';
import PostCard from '../components/common/PostCard';
import RightSidebar from '../components/common/RightSidebar';

const Home = () => {
  const posts = [
    {
      author: "LeetCode",
      time: "4 days ago",
      title: "Would you trust AI code as is?",
      preview: "Would you ship AI-generated code without review? Sometimes it looks like the perfect solution at first glance... Then you run it and you realize: looking right isn't the same...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "15 days ago",
      title: "LeetCode at Your Fingertips",
      preview: "Introducing the LeetCode mobile app, now available for smartphones and tablets. One LeetCode a day keeps your reasoning in play...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "LeetCode",
      time: "18 days ago",
      title: "Contest Rating Rule Updates",
      preview: "Hello everyone, To maintain the integrity and accuracy of LeetCode Contest Rating...",
      isOfficial: true,
    },
    {
      author: "patlind41",
      time: "26 minutes ago",
      title: "Is LeetCode Becoming Irrelevant in the AI Era?",
      preview: "The Hottest Debate Right Now With the rapid rise of AI tools like ChatGPT, GitHub Copilot...",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      <Navbar />

      <div className="flex max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1">
          <ContestBanner />

          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold mb-6">Recent Discussions</h2>

            <div className="space-y-4  h-[90vh] overflow-auto">
              {posts.map((post, idx) => (
                <PostCard key={idx} post={post} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;