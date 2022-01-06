import {
  ChartBarIcon,
  ChatIcon,
  CheckCircleIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Moment from "react-moment";

export function Comment({ comment }) {
  const { data: session } = useSession();

  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700">
      <img
        src={comment?.userImg}
        alt=""
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold capitalize text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              {comment?.verified && <CheckCircleIcon className="verified" />}
              <span className="hover:underline text-sm sm:text-[15px] ml-1">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
              <span className="text-sm  sm:text-[15px] block">
                @{comment?.tag}
              </span>
            </div>
            <p className="text-[#d9d9d9] mt-0.5 max-w-lg overflow-scroll text-[15px] sm:text-base">
              {comment?.comment}
            </p>
          </div>
          <div className="icon group flex-shrink-0">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>

      </div>
    </div>
  );
}
