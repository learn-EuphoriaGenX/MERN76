import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import CodeBlock from '@tiptap/extension-code-block';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Create() {
  const [form, setForm] = useState({
    title: '',
    difficulty: 'Medium',
    tags: [],
    description: 'Write the problem statement here...',
    inputFormat: '',
    outputFormat: '',
    examples: [{ input: '', output: '', explanation: '' }],
    constraints: '',
  });

  const [currentTag, setCurrentTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Tiptap Editor for Description
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
      }),
      BulletList,
      OrderedList,
      Underline,
      Highlight.configure({ multicolor: true }),
      CodeBlock,
    ],
    content: form.description,
    onUpdate: ({ editor }) => {
      setForm(prev => ({ ...prev, description: editor.getHTML() }));
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const addTag = () => {
    if (currentTag.trim() && !form.tags.includes(currentTag.trim())) {
      setForm(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleExampleChange = (index, field, value) => {
    const newExamples = [...form.examples];
    newExamples[index][field] = value;
    setForm(prev => ({ ...prev, examples: newExamples }));
  };

  const addExample = () => {
    setForm(prev => ({
      ...prev,
      examples: [...prev.examples, { input: '', output: '', explanation: '' }]
    }));
  };

  const removeExample = (index) => {
    setForm(prev => ({
      ...prev,
      examples: prev.examples.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    try {
      let response = await axios.post('http://127.0.0.1:5500/api/problems', form, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `${localStorage.getItem('token')}`
        }
      })
      if (response.data.success) {
        toast.success(response.data.msg);
        setForm({
          title: '',
          difficulty: 'Medium',
          tags: [],
          description: '<p>Write the problem statement here...</p>',
          inputFormat: '',
          outputFormat: '',
          examples: [{ input: '', output: '', explanation: '' }],
          constraints: '',
        });
        setCurrentTag('');
        editor?.commands.setContent('<p>Write the problem statement here...</p>');
      } else {
        toast.error(response.data.msg)
      }


    } catch (error) {

      console.log(error.response.data);

      toast.error(error.response.data.msg || "Something went wrong!");
    }


  };

  // Toolbar Button Styles
  const buttonClass = (active) =>
    `px-3 py-1.5 rounded-md text-sm font-medium transition-all ${active
      ? 'bg-orange-500 text-white'
      : 'bg-[#2a2a2a] hover:bg-[#363636] text-gray-300'
    }`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-orange-400">Create A Problem</h1>
            <p className="text-gray-400 mt-2">Create a new problem for the community</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">

          {/* Title & Difficulty */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <label className="block text-sm text-gray-400 mb-2 font-medium">PROBLEM TITLE</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleInputChange}
                required
                className="w-full bg-[#1f1f1f] border border-gray-700 focus:border-orange-500 rounded-xl px-5 py-4 text-xl outline-none"
                placeholder="e.g. Two Sum"
              />
            </div>

            <div className="md:col-span-4">
              <label className="block text-sm text-gray-400 mb-2 font-medium">DIFFICULTY</label>
              <select
                name="difficulty"
                value={form.difficulty}
                onChange={handleInputChange}
                className="w-full bg-[#1f1f1f] border border-gray-700 focus:border-orange-500 rounded-xl px-5 py-4 outline-none text-lg"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          {/* Tags - unchanged */}
          <div>
            <label className="block text-sm text-gray-400 mb-2 font-medium">TAGS</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="flex-1 bg-[#1f1f1f] border border-gray-700 focus:border-orange-500 rounded-xl px-5 py-4 outline-none"
                placeholder="Add tag (e.g. Array, Hash Table)"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-8 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {form.tags.map((tag, idx) => (
                <div key={idx} className="bg-[#252525] px-5 py-2 rounded-full flex items-center gap-2 text-sm">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-gray-400 hover:text-red-500 text-lg leading-none"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Rich Text Description with Tiptap */}
          <div>
            <label className="block text-sm text-gray-400 mb-2 font-medium">PROBLEM DESCRIPTION</label>

            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 mb-3 p-3 bg-[#1f1f1f] border border-gray-700 rounded-t-2xl">
              <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()} className={buttonClass(editor?.isActive('bold'))}>Bold</button>
              <button type="button" onClick={() => editor?.chain().focus().toggleItalic().run()} className={buttonClass(editor?.isActive('italic'))}>Italic</button>
              <button type="button" onClick={() => editor?.chain().focus().toggleUnderline().run()} className={buttonClass(editor?.isActive('underline'))}>Underline</button>
              <button type="button" onClick={() => editor?.chain().focus().toggleHighlight({ color: '#353535' }).run()} className={buttonClass(editor?.isActive('highlight'))}>Highlight</button>
            </div>

            {/* Editor Content */}
            <div className="bg-[#1f1f1f] border border-gray-700 focus-within:border-orange-500 rounded-b-2xl px-5 py-4 min-h-[300px] prose prose-invert max-w-none">
              <EditorContent editor={editor} />
            </div>
          </div>

          {/* Rest of the form remains same */}
          {/* Input & Output Format, Examples, Constraints... */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">INPUT FORMAT</label>
              <textarea
                name="inputFormat"
                value={form.inputFormat}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-[#1f1f1f] border border-gray-700 focus:border-orange-500 rounded-2xl px-5 py-4 outline-none font-mono text-sm"
                placeholder="First line: n (size of array)&#10;Second line: n integers"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">OUTPUT FORMAT</label>
              <textarea
                name="outputFormat"
                value={form.outputFormat}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-[#1f1f1f] border border-gray-700 focus:border-orange-500 rounded-2xl px-5 py-4 outline-none font-mono text-sm"
                placeholder="Print a single integer representing the answer"
              />
            </div>
          </div>

          {/* Examples Section (unchanged) */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm text-gray-400 font-medium">EXAMPLES</label>
              <button type="button" onClick={addExample} className="text-orange-500 hover:text-orange-400 text-sm flex items-center gap-1">
                + Add Example
              </button>
            </div>

            {form.examples.map((example, index) => (
              <div key={index} className="bg-[#1f1f1f] border border-gray-700 rounded-2xl p-6 mb-6 relative">
                <button type="button" onClick={() => removeExample(index)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">✕</button>

                <h4 className="font-medium mb-4 text-orange-400">Example {index + 1}</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">INPUT</label>
                    <textarea value={example.input} onChange={(e) => handleExampleChange(index, 'input', e.target.value)} className="w-full bg-[#161616] border border-gray-700 rounded-xl px-4 py-3 font-mono text-sm h-28" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block mb-1">OUTPUT</label>
                    <textarea value={example.output} onChange={(e) => handleExampleChange(index, 'output', e.target.value)} className="w-full bg-[#161616] border border-gray-700 rounded-xl px-4 py-3 font-mono text-sm h-28" />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-xs text-gray-500 block mb-1">EXPLANATION (Optional)</label>
                  <textarea value={example.explanation} onChange={(e) => handleExampleChange(index, 'explanation', e.target.value)} className="w-full bg-[#161616] border border-gray-700 rounded-xl px-4 py-3 text-sm" />
                </div>
              </div>
            ))}
          </div>

          {/* Constraints */}
          <div>
            <label className="block text-sm text-gray-400 mb-2 font-medium">CONSTRAINTS</label>
            <textarea
              name="constraints"
              value={form.constraints}
              onChange={handleInputChange}
              rows={5}
              className="w-full bg-[#1f1f1f] border border-gray-700 focus:border-orange-500 rounded-2xl px-5 py-4 outline-none font-mono text-sm"
              placeholder="1 &lt;= nums.length &lt;= 10^4&#10;-10^9 &lt;= nums[i] &lt;= 10^9"
            />
          </div>

          <div className="pt-8 border-t border-gray-800">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-bold text-lg rounded-2xl transition disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting to LeetCode...' : 'Submit Problem for Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}