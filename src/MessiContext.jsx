import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const MessiContext = createContext();

export const MessiContextProvider = ({ children }) => {
  const navBtnData = [
    {
      name: "Home",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          className="w-6 h-6 svg group-hover:stroke-blue-300 stroke-slate-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "Highlights",
      svg: (
        <svg
          className="w-6 h-6 svg group-hover:fill-blue-300  fill-slate-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 14"
        >
          <path
            fillRule="evenodd"
            d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Achievements",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          className="w-6 h-6 svg group-hover:stroke-blue-300  stroke-slate-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
          />
        </svg>
      ),
    },
    {
      name: "Stats",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          className="w-6 h-6 svg group-hover:stroke-blue-300  stroke-slate-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
          />
        </svg>
      ),
    },
  ];

  const achievementsData = [
    {
      id: 1,
      type: "World Cup",
      times: "1 x",
      img: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TVO76CDW5VOCXOIYBW67B76BVY.jpg",
    },
    {
      id: 2,
      type: "UCL",
      times: "4 x",
      img: "https://pbs.twimg.com/media/EZGpmn3X0AAf3J_?format=jpg&name=4096x4096",
    },
    {
      id: 3,
      type: "COPA AMÉRICA WINNER",
      times: "1 x",
      img: "https://c.ndtvimg.com/2021-07/2bvd6h4o_lionel-messi-twitter-_625x300_11_July_21.jpg",
    },
    {
      id: 4,
      type: "FRENCH CHAMPION",
      times: "2 x",
      img: "https://www.psg.fr/media/232070/lyon-psg_22-messi.jpg?center=0.42792792792792794,0.49549549549549549&mode=crop&width=1200&height=675&quality=75",
    },
    {
      id: 5,
      type: "La Liga CHAMPION",
      times: "10 x",
      img: "https://i.pinimg.com/originals/63/18/8f/63188f4fb8d38a53eea2bac636e16a61.jpg",
    },
    {
      id: 7,
      type: " UEFA SUPERCUP WINNER",
      times: "3 x",
      img: "https://pbs.twimg.com/media/F3fCaxmWIAA4Qij?format=jpg&name=4096x4096",
    },
    {
      id: 8,
      type: "SPANISH CUP WINNER",
      times: "7 x",
      img: "https://pbs.twimg.com/media/CqS0-aKWAAALJNh.jpg",
    },
    {
      id: 9,
      type: "SPANISH SUPER CUP WINNER",
      times: "8 x",
      img: "https://guardian.ng/wp-content/uploads/2016/08/Barcelona-vs-sevilla-957x598.jpg",
    },
    {
      id: 10,
      type: "LEAGUES CUP WINNER",
      times: "1 x",
      img: "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2023/08/20/10808877.jpg",
    },
    {
      id: 11,
      type: "UNDER-20 WORLD CUP CHAMPION",
      times: "1 x",
      img: "https://img.asmedia.epimg.net/resizer/VJNr1ZiCODNJFkvLCKEjHcTyvyY=/360x0/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/5V5XNTAAZFJ6PHWBJW4U67AOYU.jpg",
    },
    {
      id: 12,
      type: "CONMEBOL-UEFA CUP OF CHAMPIONS WINNER",
      times: "1 x",
      img: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0602%2Fr1020404_3_1296x729_16%2D9.jpg",
    },
    {
      id: 13,
      type: "FRENCH SUPER CUP WINNER",
      times: "1 x",
      img: "https://static.timesofisrael.com/www/uploads/2022/08/Untitled-16-1024x640.jpg",
    },
    {
      id: 14,
      type: "OLYMPIC MEDALIST",
      times: "2 x",
      img: "https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/31/e6fa8848-5ac4-4fde-b209-512404b3449e/ZCrBqiNv.jpg",
    },
  ];

  const personalAchievements = [
    {
      id: 1,
      type: "Ballon d'Or",
      times: "8 x",
      img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt91a43661c2f552ce/60dbc3b08491e60f790c47df/4870379847f31e9141e7513c10261e511bcd32fc.jpg",
    },
    {
      id: 2,
      type: "FIFA World Player of the Year",
      times: "3 x",
      img: "https://s01.sgp1.cdn.digitaloceanspaces.com/article/180910-igywnfawdf-1665077222.jpeg",
    },
    {
      id: 3,
      type: "Golden Foot",
      times: "1 x",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba137263-c0af-42ec-b953-ea17e9bc23e8/d5xc2lc-fa99598b-043a-47b3-8bc3-bfb977d20c44.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhMTM3MjYzLWMwYWYtNDJlYy1iOTUzLWVhMTdlOWJjMjNlOFwvZDV4YzJsYy1mYTk5NTk4Yi0wNDNhLTQ3YjMtOGJjMy1iZmI5NzdkMjBjNDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QA_RaH1qewyb4rOS6rYRKIDpUPnU_fiteXJZemxNJI0",
    },
    {
      id: 5,
      type: "UEFA Best Player",
      times: "3 x",
      img: "https://idsb.tmgrup.com.tr/2015/08/27/GenelBuyuk/barcelonas-lionel-messi-poses-with-his-best-player-1440700966800_rs.jpg",
    },
    {
      id: 6,
      type: "Golden Boot",
      times: "6 x",
      img: "https://www.fcbarcelona.com/fcbarcelona/photo/2019/10/16/f052f24c-d67f-488c-8397-47eee5e5988d/mini_2019-10-16-MESSI-BOTA-19.JPG",
    },
    {
      id: 7,
      type: "La Liga Top Scorer",
      times: "8 x",
      img: "https://icdn.football-espana.net/wp-content/uploads/2020/12/Lionel-Messi-8-640x360.jpg",
    },
    {
      id: 8,
      type: "FIFA World Cup Best Player",
      times: "2 x",
      img: "https://www.japantimes.co.jp/uploads/imported_images/uploads/2023/01/np_file_204756.jpeg",
    },
    {
      id: 4,
      type: "UEFA Champions League Top Scorer",
      times: "6 x",
      img: "https://editorial.uefa.com/resources/0250-0c50f817cda8-048ef1014623-1000/1636243_w1.jpeg",
    },
  ];

  const statsData = [
    { id: 1, type: "Matches Played", numbers: "789" },
    { id: 2, type: "Goals Scored", numbers: "721" },
    { id: 3, type: "Assists Provided", numbers: "344" },
    { id: 4, type: "G/A Ratio", numbers: "2.096" },
    { id: 5, type: "Minutes Per Goal", numbers: "101'" },
    { id: 6, type: "Point Per Match", numbers: "2.24" },
  ];
  const data = {
    navBtnData,
    statsData,
    achievementsData,
    personalAchievements,
  };

  return <MessiContext.Provider value={data}>{children}</MessiContext.Provider>;
};

export const useMessi = () => useContext(MessiContext);
