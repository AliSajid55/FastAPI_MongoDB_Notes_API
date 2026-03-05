"use client";

import { useEffect, useState } from "react";
import { getNotes, createNote, updateNote, deleteNote, Note } from "../services/api";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const loadNotes = async () => {
  try {
    const data = await getNotes();

    if (Array.isArray(data)) {
      setNotes(data);
    } else {
      setNotes([]);
    }
  } catch (error) {
    console.error("Error loading notes:", error);
    setNotes([]);
  }
};

  useEffect(() => {
  (async () => {
    await loadNotes();
  })();
}, []);

  const handleSubmit = async () => {
    if (!title || !content) return;

    if (editingId) {
      await updateNote(editingId, { title, content });
      setEditingId(null);
    } else {
      await createNote({ title, content });
    }

    setTitle("");
    setContent("");
    loadNotes();
  };

  const handleEdit = (note: Note) => {
    setEditingId(note._id || null);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    loadNotes();
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-10 transition-colors">

      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
        Notes API Dashboard
      </h1>

      {/* Form */}

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow max-w-xl mx-auto mb-10">

        <input
          className="border p-3 w-full mb-4 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-3 w-full mb-4 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className={`px-6 py-2 rounded text-white ${
            editingId ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {editingId ? "Update Note" : "Add Note"}
        </button>

      </div>

      {/* Notes Grid */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {Array.isArray(notes) &&
          notes.map((note) => (

          <div
            key={note._id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >

            <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
              {note.title}
            </h2>

            <p className="text-black dark:text-white mb-4">
              {note.content}
            </p>

            <div className="flex gap-3">

              <button
                onClick={() => handleEdit(note)}
                className="bg-yellow-600 px-4 py-1 rounded hover:bg-yellow-700"
              >
                Edit
              </button>

              <button
                onClick={() => note._id && handleDelete(note._id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}