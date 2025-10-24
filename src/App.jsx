import { useState, useEffect } from "react";
import { TrashIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error loading tasks:", error);
      return [];
    }
  });

  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks((prev) => [...prev, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const clearAll = () => setTasks([]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
      <div className="bg-white rounded-3xl shadow-2xl px-6 py-8 w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6 relative">
          Task Manager
          <span className="absolute left-1/2 -bottom-1 w-24 h-1 bg-indigo-500 -translate-x-1/2 rounded-full" />
        </h2>

        {/* Input Section */}
        <div className="flex gap-2 mb-5">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="flex-1 px-3 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        {tasks.length > 0 ? (
          <ul className="space-y-3">
            {tasks.map((t, index) => (
              <li
                key={index}
                className="group bg-gray-50 border flex justify-between items-center px-3 py-2 rounded-xl shadow-sm hover:bg-white hover:shadow-md transition-all animate-slideIn"
              >
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 opacity-80" />
                  <span className="font-medium text-gray-700">{t}</span>
                </div>

                <TrashIcon
                  onClick={() => deleteTask(index)}
                  className="h-5 w-5 text-red-500 cursor-pointer opacity-60 group-hover:opacity-100 hover:scale-110 transition"
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-500 mt-6 italic">
            📌 No tasks yet. Add one above!
          </div>
        )}

        {/* Clear All */}
        {tasks.length > 0 && (
          <button
            onClick={clearAll}
            className="mt-6 w-full bg-red-500 text-white py-2.5 rounded-xl hover:bg-red-600 active:scale-95 transition cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Animations */}
      <style>
        {`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.25s ease-out;
        }
        `}
      </style>
    </div>
  );
}
