import { useRef, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";

import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { useSession } from "next-auth/react";

import "emoji-mart/css/emoji-mart.css";

import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { signOut } from "next-auth/react";
import { db, storage } from "../../feetures/Firebase";
import { useRouter } from "next/router";
export const Tweedbox = () => {
  const [input, setInput] = useState("");
  const [image, setimage] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const inputRef = useRef(null);
  const { data: session } = useSession();
  const router = useRouter();


  // Reset All State after Create => [call this after add Post ]
  const reset = () => {
    setLoadingPost(false);
    setimage(null);
    setInput("");
    setShowEmojis(false);
    inputRef.current.value = "";
  };

  // Add Emoji in input after select
  const addEmoji = (e) => {
    let codeEmo = e.unified.split("-");
    let codesArray = [];
    codeEmo.forEach((emo) => codesArray.push("0x" + emo));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  // handle select image and add in her block
  const addImage = (e) => {
    // can read it (FileReader)
    const reader = new FileReader();
    let imgurl = e.target.files[0];
    if (imgurl) {
      reader.readAsDataURL(imgurl);
    }
    reader.onload = (readerEvent) => {
      setimage(readerEvent.target.result);
    };
    inputRef.current.value = "";
  };

  // Send Post in the Home Page
  const sendPost = async () => {
    if (!loadingPost) {
      setLoadingPost(true);
      const collectionRef = collection(db, "posts");
      const payload = {
        id: session.user.uid,
        username: session.user.name,
        userImg: session.user.image,
        tag: session.user.tag,
        text: input,
        verified: session.user.verified,
        timestamp: serverTimestamp(),
      };

      const docRef = await addDoc(collectionRef, payload);
      const imageRef = ref(storage, `posts/${docRef.id}/image`);
      if (image) {
        await uploadString(imageRef, image, "data_url").then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          await updateDoc(doc(db, "posts", docRef.id), {
            image: downloadURL,
          });
        });
      }
      reset();
    } else {
      return;
    }
  };

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-auto scrollbar-hide ${
        loadingPost && "opacity-60"
      }`}
    >
      <img
        onClick={() => {
          router.push("/");
          signOut();
        }}
        className="h-10 w-10 rounded-full cursor-pointer "
        src={session?.user?.image}
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={`${image && "pb-7"} ${input && "space-y-3"}`}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening ?"
            className="min-h-[35px] max-h-[150px] bg-transparent w-full outline-none border-none text-[#d9d9d9] text-lg  tracking-wide "
          />
          {image && (
            <div className="relative ">
              <div
                onClick={() => setimage(null)}
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
              >
                <XIcon className="text-white h-6 " />
              </div>
              <img
                src={image}
                alt=""
                className="rounded max-h-80 border  object-contain"
              ></img>
            </div>
          )}
          <h5 className=" text-sm text-[#1d9bf0] hover:bg-[#1d9cf02c] w-fit p-2 rounded-md">
            <GlobeAltIcon
              width={15}
              height={15}
              className="inline-block mt-[-2px]"
            />{" "}
            Everyone can replay
          </h5>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon">
              <PhotographIcon
                onClick={() => inputRef.current.click()}
                className="h-[22px] text-[#1d9bf0] cursor-pointer"
              />
              <input
                type="file"
                ref={inputRef}
                hidden
                onChange={addImage}
                accept="image/*"
              />
            </div>

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            {showEmojis && (
              <Picker
                onSelect={addEmoji}
                style={{
                  position: "absolute",
                  marginTop: "465px",
                  marginLeft: -40,
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
              />
            )}

            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px] " />
            </div>
          </div>
        </div>
        <button
          className="bg-[#1d9bf0] block ml-auto  text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disableon
                d:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default "
          disabled={!input.trim() && !image}
          onClick={sendPost}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
