import React, { useState, useMemo } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { MoveRight, Notebook, Search, ArrowUp, MessageSquare } from 'lucide-react';

function Discuss() {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedId, setExpandedId] = useState(null);
    const [newQuestion, setNewQuestion] = useState('');

    // Mock data
    const discussions = [
        {
            id: 1,
            title: "Why is my two-pointer solution getting TLE?",
            author: "code_ninja_42",
            time: "2 hours ago",
            votes: 24,
            answers: 7,
            tags: ["Two Pointers", "Array", "Optimization"],
            replies: [
                { author: "Rounak", text: "Try using fast input methods.", time: "1h ago" },
                { author: "coderPro", text: "Make sure you are not doing extra passes.", time: "2h ago" },
            ]
        },
        {
            id: 2,
            title: "Best way to handle large inputs in Python?",
            author: "pythonlover",
            time: "5 hours ago",
            votes: 18,
            answers: 12,
            tags: ["Python", "Input", "Performance"],
            replies: [
                { author: "helper123", text: "Use sys.stdin.read() for faster input.", time: "1h ago" },
            ]
        },
        {
            id: 3,
            title: "Can someone explain DP on Trees clearly?",
            author: "dp_king",
            time: "Yesterday",
            votes: 45,
            answers: 9,
            tags: ["Dynamic Programming", "Tree", "Graph"],
            replies: []
        },
    ];

    // Filter discussions based on search

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-4xl font-bold text-orange-400">Discuss</h1>
                        <p className="text-gray-400 mt-2">Ask questions, share ideas, and learn together</p>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col lg:flex-row gap-4 mb-8">
                    <div className="flex-1">
                        <Input
                            leftIcon={Search}
                            placeholder="Search discussions..."
                            className="bg-[#1f1f1f] border-gray-700 text-lg py-4"
                        />
                    </div>
                </div>

                {/* Quick Post */}
                <div className="bg-[#1f1f1f] border border-gray-700 rounded-2xl p-6 mb-10">
                    <h3 className="text-lg font-semibold mb-4">Quick Post a Question</h3>
                    <Input
                        leftIcon={Notebook}
                        placeholder="e.g. How to optimize this recursive solution?"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                        className="bg-[#161616] border-gray-700 py-4"
                    />
                    <div className="flex gap-3 mt-4">
                        <Button className="bg-gray-700 hover:bg-gray-600">Add Tags</Button>
                        <Button
                            className="bg-orange-600 hover:bg-orange-500"
                            disabled={!newQuestion.trim()}
                        >
                            Post Question
                        </Button>
                    </div>
                </div>

                {/* Discussions List */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Recent Discussions</h2>
                        <p className="text-gray-400 text-sm">
                            {discussions.length} discussion{discussions.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    {discussions.length === 0 ? (
                        <div className="text-center py-12 text-gray-400">
                            No discussions found matching your search.
                        </div>
                    ) : (
                        discussions.map((disc) => (
                            <div
                                key={disc.id}
                                className="bg-[#1f1f1f] border border-gray-700 hover:border-orange-500/30 rounded-2xl p-6 transition-all hover:shadow-xl"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-medium text-orange-400">
                                            {disc.title}
                                        </h3>
                                        <div className="flex items-center gap-3 mt-3 text-sm text-gray-400">
                                            <span>by <span className="text-gray-300">{disc.author}</span></span>
                                            <span>•</span>
                                            <span>{disc.time}</span>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className="flex items-center gap-1 text-emerald-400 font-medium">
                                            ▲ {disc.votes}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">{disc.answers} answers</p>
                                    </div>
                                </div>

                                {/* Tags & Actions */}
                                <div className="flex flex-wrap items-center justify-between mt-5">
                                    <div className="flex flex-wrap gap-2">
                                        {disc.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-[#2a2a2a] px-3 py-1.5 rounded-full text-gray-300 hover:bg-[#363636] cursor-pointer transition"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6 text-sm">
                                        <button
                                            onClick={() => toggleExpand(disc.id)}
                                            className={`flex items-center gap-2 transition-colors ${expandedId === disc.id ? 'text-orange-400' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            <MessageSquare size={18} />
                                            <span>{disc.replies.length} {disc.replies.length === 1 ? 'Reply' : 'Replies'}</span>
                                        </button>

                                        <button className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                                            <ArrowUp size={18} />
                                            <span>Upvote</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Expanded Replies */}
                                {expandedId === disc.id && (
                                    <div className="mt-6 bg-[#161616] rounded-2xl p-5 border border-gray-700">
                                        {disc.replies.map((reply, idx) => (
                                            <div key={idx} className="mb-5 pb-5 border-b border-gray-700 last:border-none last:mb-0 last:pb-0">
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="font-medium text-gray-200">{reply.author}</span>
                                                    <span className="text-gray-500">{reply.time}</span>
                                                </div>
                                                <p className="text-gray-300">{reply.text}</p>
                                            </div>
                                        ))}

                                        {/* Reply Input */}
                                        <div className="flex gap-3 mt-4">
                                            <input
                                                type="text"
                                                placeholder="Write a reply..."
                                                className="flex-1 bg-[#1f1f1f] border border-gray-700 rounded-xl px-4 py-3 focus:border-orange-500 outline-none text-sm"
                                            />
                                            <button className="bg-orange-600 hover:bg-orange-500 px-6 rounded-xl font-medium whitespace-nowrap">
                                                Reply
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Discuss;