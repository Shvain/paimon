// app/page.tsx
import React from 'react';
import { Wrapper } from 'enkanetwork.js';

export default async function Home() {
  const playerUID = 812098487;
  
  // サーバーコンポーネントでデータを取得
  const options = {
    userAgent: 'my-app/v1.0.0',
    //language: 'ja',
    cache: false,
  };

  const { genshin } = new Wrapper(options);
  
  let playerInfo = null;

  try {
    playerInfo = await genshin.getPlayer(playerUID);
    console.log('プレイヤー情報:', playerInfo);
  } catch (err) {
    console.error('APIの呼び出しに失敗しました:', err);
  }

  return (
    <div>
      <h1>プレイヤー情報を取得</h1>
      <pre>{JSON.stringify(playerInfo, null, 2)}</pre> {/* JSON形式で表示 */}
    </div>
  );
}