import React, { useRef } from 'react';

export default function CertificateGenerator({ course, studentName = "Student" }) {
    const handleDownload = () => {
        alert("Certificate download simulation! (In production this would generate a PDF)");
    };

    return (
        <div className="mt-8 p-8 glass-card rounded-2xl border border-yellow-500/20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-yellow-500/5 blur-3xl group-hover:bg-yellow-500/10 transition-colors duration-700"></div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">🏆 Course Completed!</h3>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">Congratulations! You have successfully mastered all the concepts in {course.title}. Here is your certificate of completion.</p>

                <div
                    className="relative mx-auto bg-[#FDFBF7] text-black p-12 max-w-3xl border-[16px] border-double border-[#1e293b] shadow-2xl transform transition-transform duration-500 hover:scale-[1.01]"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                >
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-[32px] border-l-[32px] border-[#B8860B]"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[32px] border-r-[32px] border-[#B8860B]"></div>

                    <div className="border-b-2 border-gray-300 pb-6 mb-8">
                        <h1 className="text-5xl font-bold text-[#1e293b] uppercase tracking-[0.2em] mb-2">Certificate</h1>
                        <p className="text-xl text-[#B8860B] italic font-serif">of Completion</p>
                    </div>

                    <div className="py-4 space-y-6">
                        <p className="text-xl text-gray-600 italic">This is to certify that</p>
                        <h2 className="text-4xl font-bold text-[#1e293b] border-b-2 border-gray-300 inline-block pb-2 px-8 font-sans">{studentName}</h2>
                        <p className="text-xl text-gray-600 italic">has successfully completed the course</p>
                        <h3 className="text-3xl font-bold text-[#B8860B] font-serif">{course.title}</h3>
                        <p className="text-lg text-gray-600">Instructor: {course.instructor}</p>
                    </div>

                    <div className="mt-12 flex justify-between items-end text-sm text-gray-500 pt-8 border-t border-gray-300">
                        <div className="text-center">
                            <p className="mb-2">Date</p>
                            <p className="font-semibold text-black text-lg border-b border-gray-400 px-4">{new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="text-center opacity-80">
                            <div className="w-16 h-16 rounded-full border-4 border-[#B8860B] flex items-center justify-center font-bold text-[#B8860B] mx-auto mb-2 text-xs">
                                OFFICIAL<br />SEAL
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-2">Signature</p>
                            <p className="font-script text-2xl text-black border-b border-gray-400 px-4" style={{ fontFamily: 'cursive' }}>{course.instructor}</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleDownload}
                    className="mt-8 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-yellow-500/20 flex items-center gap-2 mx-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Certificate
                </button>
            </div>
        </div>
    );
}
