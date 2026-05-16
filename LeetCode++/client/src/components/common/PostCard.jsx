import React from 'react';
import { Clock } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-[#1e2937] hover:bg-[#25334a] border border-slate-700 rounded-2xl p-5 transition-all cursor-pointer">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
          {post.author?.[0] || 'L'}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">{post.author}</span>
            {post.isOfficial && <span className="text-orange-400">• Official</span>}
            <span className="text-slate-400">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock size={14} /> {post.time}
            </span>
          </div>

          <h3 className="font-semibold text-lg mt-1 leading-tight hover:text-orange-400">
            {post.title}
          </h3>

          <p className="text-slate-300 mt-2 text-[15px] line-clamp-2">
            {post.preview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;