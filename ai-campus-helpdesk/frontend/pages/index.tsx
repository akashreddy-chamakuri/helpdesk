import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = async () => {
    const res = await fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">AU Campus Helpdesk 🤖</h1>
      <textarea 
        className="border p-2 w-80 rounded mb-2"
        placeholder="Ask a question..."
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <button 
        onClick={ask}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ask
      </button>
      <div className="mt-4 p-3 border rounded bg-gray-100 w-80">
        {answer}
      </div>
    </div>
  );
}
