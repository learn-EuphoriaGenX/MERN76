import React, { useEffect, useState } from 'react';
import { Container, Cable, Database, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Problems() {
  const topics = [
    { icon: <Container className="w-5 h-5" />, name: "All Topics" },
    { icon: <Cable className="w-5 h-5" />, name: "Algorithms" },
    { icon: <Database className="w-5 h-5" />, name: "Database" },
  ];

  const [problems, setProblems] = useState([])

  const navigate = useNavigate()

  const navigateTo = (link) => {
    navigate('/' + link)
  }

  const getDifficultyColor = (difficulty) => {
    if (difficulty === "Easy") return "text-emerald-500 bg-emerald-500/10";
    if (difficulty === "Medium") return "text-amber-500 bg-amber-500/10";
    return "text-red-500 bg-red-500/10";
  };



  useEffect(() => {
    const getAllProblems = async () => {
      const respose = await axios.get("http://127.0.0.1:5500/api/problems")
      setProblems(respose.data.problems)
    }
    getAllProblems()
  }, [])


  return (
    <div className="bg-zinc-950 min-h-screen text-white px-30 py-10">
      {/* Topics Section */}
      <div className="mb-10 sticky top-14 bg-zinc-950/20 backdrop-blur-sm pb-3 ">
        <h2 className="text-2xl font-bold mb-4">Topics</h2>
        <div className="flex gap-4 flex-wrap ">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-violet-500 rounded-2xl cursor-pointer transition-all duration-200"
            >
              <span className="text-violet-400">{topic.icon}</span>
              <span className="font-medium">{topic.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Problems List */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Problems</h2>

        {
          problems.length == 0 && <p>No problems found</p>
        }

        <div className="space-y-4">
          {problems.map((problem) => (
            <div
              key={problem.id}
              onClick={() => { navigateTo(problem._id) }}
              className="group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 flex items-center gap-6 transition-all hover:shadow-xl"
            >
              {/* Favourite Button */}
              <button className="text-zinc-500 hover:text-yellow-400 transition-colors">
                <Star
                  className={`w-6 h-6 ${problem.isFavourite ? 'fill-yellow-400 text-yellow-400' : ''}`}
                />
              </button>

              {/* Problem Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-4">
                  <h3 className="font-semibold text-lg group-hover:text-violet-400 transition-colors">
                    {problem.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {problem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side Info */}
              <div className="flex items-center gap-8 text-sm">
                {/* Difficulty */}
                <div className={`px-4 py-1.5 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty}
                </div>

                {/* Acceptance */}
                <div className="text-zinc-400 min-w-[80px] text-right">
                  {problem.acceptance? problem.acceptance : '50%'}
                </div>

                {/* Link Arrow */}
                <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// redux payment 