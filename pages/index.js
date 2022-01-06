import Head from "next/head";
import { Feed } from "../components/home/Feed";
import { Sidebar } from "../components/sidebar/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import { Login } from "../components/Login";
import { useRecoilState } from "recoil";
import { modalState } from "../state/atom";
import { Modal } from "../components/modal/Modal";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: sesstion } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  if (!sesstion) return <Login providers={providers} />;
  return (
    <div className="">
      <Head>
        <title>Twitter | Home </title>
        <link rel="icon" href="/twitter.png" />
      </Head>
      <main className="bg-[#111] min-h-screen max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        {open && <Modal />}
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}
