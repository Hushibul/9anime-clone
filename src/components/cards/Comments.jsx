import React, { Fragment } from "react";

const Comments = () => {
  const exampleComments = [
    {
      username: "AnimeFan123",
      avatar: "https://i.pravatar.cc/150?img=1",
      text: "This episode was amazing! The animation was top-notch.",
      timestamp: "2 hours ago",
    },
    {
      username: "WeebLord",
      avatar: "https://i.pravatar.cc/150?img=2",
      text: "I can't believe what just happened! I'm so hyped for the next episode.",
      timestamp: "5 hours ago",
    },
    {
      username: "OtakuQueen",
      avatar: "https://i.pravatar.cc/150?img=3",
      text: "The voice acting in the dub is surprisingly good.",
      timestamp: "1 day ago",
    },
  ];

  return (
    <Fragment>
      <section className="flex my-8 flex-col">
        <div className="mx-2 flex justify-between bg-primary-color items-center p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Comments</h2>
          <div className="flex">
            <p className="bg-neutral-800 text-gray-500 py-1 px-2 rounded">
              Rules
            </p>
          </div>
        </div>

        <div className="mx-2 p-4 bg-neutral-800">
          <div className="mb-4">
            <textarea
              className="w-full p-2 bg-neutral-700 text-white rounded-lg"
              rows="4"
              placeholder="Add a comment..."
            ></textarea>
            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Post Comment
            </button>
          </div>

          <div className="space-y-4">
            {exampleComments.map((comment, index) => (
              <div key={index} className="flex items-start space-x-4">
                <img
                  src={comment.avatar}
                  alt={comment.username}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white">
                      {comment.username}
                    </span>
                    <span className="text-xs text-gray-400">
                      {comment.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-300">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600">
              Load More Comments
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Comments;
