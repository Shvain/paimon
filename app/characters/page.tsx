// import React, { useEffect, useState } from 'react';
// import { Wrapper, PlayerData } from 'enkanetwork.js';

// export default function Characters() {
//   const [data, setData] = useState<PlayerData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       // オプションを設定
//       const options = {
//         userAgent: 'my-app/v1.0.0', // 任意のユーザーエージェント
//         cache: false,   // キャッシュを無効にする場合
//       };

//       const { genshin } = new Wrapper(options);

//       try {
//         const player = await genshin.getPlayer(812098487); // ユーザーIDは実際のものに置き換えてください
//         setData(player);
//       } catch (err) {
//         setError('データの取得に失敗しました');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>読み込み中...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>原神キャラクター情報</h1>
//       {data?.characters?.map((character) => (
//         <div key={character.id}>
//           <h2>{character.name}</h2>
//           <p>レベル: {character.level}</p>
//           <img src={character.icon} alt={character.name} />
//         </div>
//       ))}
//     </div>
//   );
// }