import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center mt-[20px]">
        <Link className="p-[10px] h-[47px] bg-slate-800 w-[100px] text-center text-white rounded-xl" href="/components/login">Login</Link>
    </main>
  );
}
