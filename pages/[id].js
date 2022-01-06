import { ArrowLeftIcon, PhotographIcon } from "@heroicons/react/solid";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
} from "@firebase/firestore";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  XIcon,
} from "@heroicons/react/outline";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState, postState } from "../state/atom";
import { Modal } from "../components/modal/Modal";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Login } from "../components/Login";
import { Post } from "../components/home/Post";

import { db } from "../feetures/Firebase";
import { Comment } from "../components/home/Comment";
import Head from "next/head";
import { Picker } from "emoji-mart";

function PostPage({ providers }) {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [post, setPost] = useState();
  const [allComments, setAllComments] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  // get Posts from data firesore
  useEffect(() => {
    const getPosts = onSnapshot(doc(db, "posts", id), (snapshot) => {
      setPost(snapshot.data());
    });
    return getPosts;
  }, [db]);
  // get comments in data fire store
  useEffect(() => {
    const getComments = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setAllComments(snapshot.docs)
    );
    return getComments;
  }, [db, id]);




  if (!session) return <Login providers={providers} />;
  return (
    <div>
      <Head>
        <title>
          {post?.username} on Twitter: "{post?.text}"
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#111] min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
          <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
            <div
              className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
              onClick={() => router.push("/")}
            >
              <ArrowLeftIcon className="h-5 text-white cursor-pointer" />
            </div>
            Tweet
          </div>

          <Post id={id} post={post} />

          {allComments.length > 0 && (
            <div className="pb-72">
              {allComments.map((comment) => (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  comment={comment.data()}
                />
              ))}
            </div>
          )}
        </div>
        
        {open && <Modal />}
      </main>
    </div>
  );
}

export default PostPage;

