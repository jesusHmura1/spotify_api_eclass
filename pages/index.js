import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        {<Sidebar></Sidebar>}
        {/* CENTER */}

        <div>{/* PLAYER */}</div>
      </main>
    </div>
  );
}
