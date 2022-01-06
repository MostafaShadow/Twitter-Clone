import {
  CalendarIcon,
  ChartBarIcon,
  CheckCircleIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { Dialog, Transition } from "@headlessui/react";
import { modalState, postState } from "../../state/atom";
import { Fragment, useEffect, useState } from "react";
import {
  onSnapshot,
  doc,
  addDoc,
  collection,
  serverTimestamp,
} from "@firebase/firestore";

import { db } from "../../feetures/Firebase";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";
import Moment from "react-moment";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
export function Modal() {
  const router = useRouter();
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postState);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  // get posts in data firestore and set posts in state => = [post]
  useEffect(() => {
    const getPosts = onSnapshot(doc(db, "posts", postId), (snapshot) => {
      setPost(snapshot.data());
    });
    return getPosts;
  }, [db]);
;

  // add comment in post  in firestore and then go at post page
  const handleSendComments = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "posts", postId, "comments"), {
      comment: comment,
      username: session.user.name,
      verified: session.user.verified,
      tag: session.user.tag,
      userImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    router.push(`/${postId}`);
    setOpen(false);
    setComment("");
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 pt-8" onClose={setOpen}>
        <div className="flex items-start justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-black rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full h-auto">
              <div className="flex items-center px-1.5 py-2 border-b border-gray-700">
                <div
                  className="hoverAnimationC h-9 flex items-center xl:px-0 "
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="h-[22px] text-white ml-3" />
                </div>
              </div>
              <div className="flex px-4 pt-5 pb-2.5 sm:px-6">
                <div className="w-full">
                  <div className="text-[#6e767d] flex gap-x-3 relative">
                    <span className="w-0.5 h-full z-[-1] absolute left-5 top-11 bg-gray-600" />
                    <img
                      src={post?.userImg}
                      alt=""
                      className="h-11 w-11 rounded-full"
                    />
                    <div>
                      <div className="inline-block group">
                        <h4 className="font-bold text-[#d9d9d9] inline-block text-[15px] sm:text-base">
                          {post?.username}
                        </h4>
                        {post?.verified && (
                          <CheckCircleIcon className="verified" />
                        )}
                        <span className="ml-1.5 text-sm sm:text-[15px]">
                          @{post?.tag}{" "}
                        </span>
                      </div>

                      <span className="ml-2 hover:underline text-sm sm:text-[15px]">
                        <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                      </span>
                      <p className="text-[#d9d9d9] text-[15px] sm:text-base">
                        {post?.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex space-x-3 w-full">
                    <img
                      src={session.user.image}
                      alt=""
                      className="h-11 w-11 rounded-full"
                    />
                    <div className="flex-grow mt-2">
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tweet your reply"
                        rows="2"
                        className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[60px] max-h-[70px]"
                      />
                    </div>
                    <div className="flex  justify-between pt-1">
                      <div className="flex relative">
      

                        
                      </div>
                      <button
                        className="bg-[#1d9bf0] text-white rounded-full w-[80px] h-[45px] font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
                        type="submit"
                        onClick={handleSendComments}
                        disabled={!comment.trim()}
                      >
                        Reply
                      </button>
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
