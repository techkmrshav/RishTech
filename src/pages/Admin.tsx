import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; // adjust path if needed
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

type Todo = {
  id: string;
  created_at: string;
  title: string;
  is_complete: boolean;
};

export default function Admin() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  // Fetch todos from Supabase
  const fetchTodos = async () => {
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
    } else {
      setTodos(data ?? []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Insert a new todo
  async function addTodo(title: string) {
    if (!title.trim()) return;
    const { data, error } = await supabase
      .from("todos")
      .insert([{ title, is_complete: false }])
      .select();

    if (error) {
      console.error("Insert error:", error);
    } else {
      console.log("Inserted:", data);
      setTodos((prev) => [...data!, ...prev]); // update UI immediately
      setTitle(""); // clear input
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
            Admin <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Manage your Rish Tech platform with premium admin controls and analytics.
          </p>

          {/* Add Todo Form */}
          <div className="max-w-md mx-auto mb-8 flex gap-2">
            <input
              type="text"
              placeholder="Enter todo title"
              className="flex-1 border px-3 py-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              onClick={() => addTodo(title)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </div>

          {/* Supabase Todos Section */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Todos</h2>
            {loading ? (
              <div className="text-center">Loading…</div>
            ) : (
              <ul className="space-y-3">
                {todos.map((t) => (
                  <li
                    key={t.id}
                    className="p-4 rounded-lg shadow bg-gray-50 flex items-center justify-between"
                  >
                    <span>{t.title}</span>
                    <span>{t.is_complete ? "✅" : "❌"}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
