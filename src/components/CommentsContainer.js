import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "@meetprajapati",
    text: "when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
    replies: [
      {
        name: "Samat chavan",
        text: "After the hype of linkedin i came here and believe me it was worth it all...the way of your presentation and the feeling that  instead of a teacher a friend is teaching,makes the videos more and more interesting.thanks a lot for sharing your precious knowledge with us and that too for free of cost.",
        replies: [],
      },
    ],
  },
  {
    name: "@vipulpurohit",
    text: "when can we expect EP-04 ?? you made me fall in love with JavaScript, 🚀🚀🚀♥Amazing content",
    replies: [
      {
        name: "Samat chavan",
        text: "hh my God Man!! 🔥 Heavy stuffs. I literally had goosebumps when you showed practical example of 📚 Thank you so much for these awesome contents. 🙏🏼",
        replies: [
          {
            name: "Marc Joe",
            text: "Also please let us know how do you liked it..❤️🙂 See you until next weekend 😊🙏🌴",
            replies: [],
          },
          {
            name: "Agni chavan",
            text: "Also please let us know how do you liked it..❤️🙂 See you until next weekend 😊🙏🌴",
            replies: [
              {
                name: "Samat chavan",
                text: "Also please let us know how do you liked it..❤️🙂 See you until next weekend 😊🙏🌴",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Samat chavan",
        text: "namaste react 🚀 project very⭐🔴🚀♥ good",
        replies: [],
      },
    ],
  },
  {
    name: "@rahulchavan",
    text: "You kept the old cooking style alive, fan of the your cooking brother.",
    replies: [
      {
        name: "Samat chavan",
        text: "Also please let us know how do you liked it..❤️🙂 See you until next weekend 😊🙏🌴",
        replies: [],
      },
      {
        name: "Samat chavan",
        text: "You kept the old cooking style alive, fan of the your cooking brother",
        replies: [],
      },
    ],
  },
  {
    name: "@yogeshsabankar",
    text: "when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
    replies: [
      {
        name: "Samat chavan",
        text: "Amo suas receitas,e seu estilo de cozinhar tbm!!❤❤😊😊",
        replies: [],
      },
      {
        name: "Kishor chavan",
        text: "Pooja tu kharach all rounder aahes.Tuja recipe khup chan astat.👌👌❤️",
        replies: [],
      },
      {
        name: "Harshdeep chavan",
        text: "namaste rract project very good",
        replies: [],
      },
    ],
  },
  {
    name: "@spillthebuzz",
    text: "Literally i was studying from 2 hour and feeling so ❤❤❤ tired then accidentally come on this playlist ...❤❤❤ Feeling like someone is singing for me and literally a different vibe comes ❤❤❤    ",
    replies: [
      {
        name: "Samat chavan",
        text: "Your voice is totally heart touching ❤😊",
        replies: [],
      },
    ],
  },
  {
    name: "@DebojyotiMandal",
    text: "when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
    replies: [
      {
        name: "Samat chavan",
        text: "namaste rract project very good",
        replies: [],
      },
      {
        name: "Samat chavan",
        text: "Aaaaahhhhhhhh kya voice hai. Yaar 🔥🔥🔥...,...❤️❤️❤️so sweet",
        replies: [],
      },
    ],
  },
  {
    name: "@rahulchavan",
    text: "Magical voice 💫💫💫❣️",
    replies: [
      {
        name: "Samat chavan",
        text: "namaste rract project very good",
        replies: [],
      },
      {
        name: "Samat chavan",
        text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
        replies: [],
      },
    ],
  },
  {
    name: "@yogeshsabankar",
    text: "when can we expect EP-04 ?? you made me fall in love with JavaScript, Amazing content",
    replies: [
      {
        name: "Samat chavan",
        text: "What a magical Superb voice… I m Artist when I m working alwz listen ur songs … it’s gave me energy to do my work ✍",
        replies: [],
      },
      {
        name: "Kishor chavan",
        text: "What a magical and fantastic voice🥳🤩🤩🥰🥰😍😍💯💯",
        replies: [],
      },
      {
        name: "Harshdeep chavan",
        text: "namaste rract project very good",
        replies: [],
      },
    ],
  },
];

const CommentsContainer = ({ commentCount }) => {
  return (
    <div className="my-5 p-2">
      <h1 className="font-bold text-xl mb-4">{commentCount} Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
