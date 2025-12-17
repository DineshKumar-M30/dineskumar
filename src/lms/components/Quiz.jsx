import React, { useState } from 'react';

const mockQuestions = [
    {
        id: 1,
        question: "What is the correct syntax to create a function in JavaScript?",
        options: ["function myFunc()", "def myFunc()", "func myFunc()", "function:myFunc()"],
        answer: 0
    },
    {
        id: 2,
        question: "Which hook is used for side effects in React?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: 1
    },
    {
        id: 3,
        question: "How do you pass data to a child component?",
        options: ["State", "Props", "Context", "Redux"],
        answer: 1
    }
];

// Simple Confetti Component
const Confetti = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full animate-fall"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `-5%`,
                        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                    }}
                />
            ))}
            <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-fall {
            animation: fall linear forwards;
        }
      `}</style>
        </div>
    );
};

export default function Quiz({ onComplete, onViewCertificate }) {
    const [currentInfo, setCurrentInfo] = useState(0); // 0: intro, 1: quiz, 2: result
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);

    const calculateScore = () => {
        // Always return 100% as requested
        return 100;
    };

    const handleSubmit = () => {
        const finalScore = calculateScore();
        setScore(finalScore);
        setCurrentInfo(2);
        if (finalScore >= 70 && onComplete) {
            onComplete();
        }
    };

    const handleOptionSelect = (qId, opIdx) => {
        setAnswers(prev => ({ ...prev, [qId]: opIdx }));
    };

    if (currentInfo === 0) {
        return (
            <div className="glass-card p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-400 text-2xl font-bold">?</div>
                <h2 className="text-2xl font-bold mb-2">Knowledge Check</h2>
                <p className="text-gray-400 mb-6">Test your understanding with {mockQuestions.length} quick questions. You need 70% to pass.</p>
                <button
                    onClick={() => setCurrentInfo(1)}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25"
                >
                    Start Quiz
                </button>
            </div>
        );
    }

    if (currentInfo === 2) {
        const passed = score >= 70;
        return (
            <div className="glass-card p-8 rounded-2xl text-center relative overflow-hidden">
                {passed && <Confetti />}
                <div className={`absolute top-0 left-0 w-full h-1 ${passed ? 'bg-green-500' : 'bg-red-500'}`} />
                <h2 className={`text-3xl font-bold mb-2 ${passed ? 'animate-bounce text-green-400' : ''}`}>{passed ? '🎉 Congratulations!' : '😔 Try Again'}</h2>

                {passed && <div className="text-lg text-yellow-400 font-medium mb-4 animate-pulse">You are a Certified Expert!</div>}

                <div className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">
                    {score}%
                </div>
                <p className="text-gray-400 mb-6">
                    {passed
                        ? "Great job! You've mastered the concepts."
                        : "Review the material and try again to earn your certificate."}
                </p>
                <div className="flex gap-3 justify-center z-10 relative">
                    <button
                        onClick={() => {
                            setAnswers({});
                            setCurrentInfo(1);
                        }}
                        className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                    >
                        Retry
                    </button>
                    {passed && (
                        <button
                            onClick={onViewCertificate}
                            className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-500 hover:from-yellow-500 hover:to-amber-400 text-white font-bold transition-all shadow-lg shadow-yellow-500/20 animate-pulse transform hover:scale-105"
                        >
                            🎓 View Certificate
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="glass-card p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Quiz</h3>
                <span className="text-sm text-gray-400">Question {Object.keys(answers).length}/{mockQuestions.length} Answered</span>
            </div>

            <div className="space-y-8">
                {mockQuestions.map((q, idx) => (
                    <div key={q.id} className="space-y-3">
                        <p className="font-medium text-lg leading-relaxed"><span className="text-gray-500 mr-2">{idx + 1}.</span>{q.question}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6">
                            {q.options.map((opt, oIdx) => (
                                <div
                                    key={oIdx}
                                    onClick={() => handleOptionSelect(q.id, oIdx)}
                                    className={`
                    p-3 rounded-lg border cursor-pointer transition-all flex items-center gap-3
                    ${answers[q.id] === oIdx
                                            ? 'bg-indigo-600/20 border-indigo-500 text-white'
                                            : 'border-slate-700/50 hover:bg-slate-800/50 text-gray-300'
                                        }
                  `}
                                >
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${answers[q.id] === oIdx ? 'border-indigo-500' : 'border-gray-500'}`}>
                                        {answers[q.id] === oIdx && <div className="w-2 h-2 rounded-full bg-indigo-400" />}
                                    </div>
                                    {opt}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/50 flex justify-end">
                <button
                    disabled={Object.keys(answers).length < mockQuestions.length}
                    onClick={handleSubmit}
                    className="bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25"
                >
                    Submit Answers
                </button>
            </div>
        </div>
    );
}
