import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ログイン状態を監視（未ログインなら / に戻す）
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 w-96 text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">ようこそ！</h2>
        {user ? (
          <>
            <p className="mb-4">ログイン中: {user.email}</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-semibold"
            >
              ログアウト
            </button>
          </>
        ) : (
          <p>読み込み中...</p>
        )}
      </div>
    </div>
  );
}
