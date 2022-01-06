import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "@firebase/firestore";

import {
  ChartBarIcon,
  ChatIcon,
  CheckCircleIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartIconFilled,
  ChatIcon as ChatIconFilled,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useRecoilState } from "recoil";
import { postState, modalState, modaleEdit } from "../../state/atom";
import { db } from "../../feetures/Firebase";
export function Post({ id, post }) {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postState);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [like, setlike] = useState(false);
  const router = useRouter();

 
  // Get Comments Post from firestore Data
  useEffect(() => {
    const getComments = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
    return getComments;
  });

  // Get Likes from Likes firestore Data
  useEffect(() => {
    const getLikes = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
    return getLikes;
  }, [db, id]);
  // Check user add like or no

  useEffect(() => {
    const addLikes = setlike(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
    return addLikes;
  }, [likes]);
  // user add like or remove like
  const handleLikePost = async () => {
    /**
     [1] after user add like  => get Doc Rufrense and add id post in doc
      [2] add collection(,likes , id user)
     [3] and then setDoc(username)
      */
    if (like) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.name,
      });
    }
  };

  //  Remove post
  const handleRemovePost = (e) => {
    e.stopPropagation();
    deleteDoc(doc(db, "posts", id));
    router.push("/");
  };

  return (
    <div
      className="p-3 flex cursor-pointer border-b border-gray-700"
      onClick={() => router.push(`/${id}`)}
    >
      <img src={post?.userImg} alt="" className="h-11 w-11 rounded-full mr-4" />

      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex justify-between`}>
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4
                className={`font-bold text-[16px] sm:text-base capitalize mr-2 text-[#d9d9d9] inline-block `}
              >
                {post?.username}
                {session.user.verified && (
                  <CheckCircleIcon className="verified" />
                )}
              </h4>
              <span className="hover:underline text-sm sm:text-[15px]">
                <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
              </span>

              <h6 className={`text-sm sm:text-[16px]`}>@{post?.tag}</h6>
              <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">
                {post?.text}
              </p>
            </div>
          </div>
          <div className="icon group flex-shrink-0 ml-auto">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

        <img
          src={post?.image}
          alt=""
          className="rounded-2xl max-h-[700px] object-cover mr-2"
        />
        <div
          className={`text-[#6e767d] flex justify-between w-10/12 
          }`}
        >
          <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              handleLikePost();
            }}
          >
            <div className="icon group-hover:bg-pink-600/10">
              {like ? (
                <HeartIconFilled className="h-5 text-pink-600" />
              ) : (
                <HeartIcon className="h-5 group-hover:text-pink-600" />
              )}
            </div>
            {likes.length > 0 && (
              <span
                className={`group-hover:text-pink-600 text-sm ${
                  like && "text-pink-600"
                }`}
              >
                {likes.length}
              </span>
            )}
          </div>
          <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              setPostId(id);
              setOpen(true);
            }}
          >
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            {comments.length > 0 && (
              <span className="group-hover:text-[#1d9bf0] text-sm">
                {comments.length}
              </span>
            )}
          </div>

          {session.user.uid === post?.id && (
            <div
              className="flex items-center space-x-1 group"
              onClick={handleRemovePost}
            >
              <div className="icon group-hover:bg-red-600/10">
                <TrashIcon className="h-5 group-hover:text-pink-600" />
              </div>
            </div>
          )}


          {/* <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
