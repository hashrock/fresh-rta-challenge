import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

type Odai = Record<string, string[]>;

const odais: Odai = {
  "$1牧場のLP": [
    "アルパカ",
    "熊",
    "ダチョウ",
    "ハムスター",
    "ハリネズミ",
    "アヒル",
    "象",
  ],
  "$1の公式サイト": [
    "猫カフェ",
    "動物園",
    "遊園地",
    "水族館",
    "美術館",
    "博物館",
    "公園",
    "ケーキ屋",
    "旅行代理店",
    "航空会社",
  ],
  "$1チームのファンサイト": [
    "サッカー",
    "野球",
    "アメフト",
    "バスケ",
    "バレーボール",
    "ラグビー",
    "卓球",
    "テニス",
    "バドミントン",
    "Eスポーツ",
  ],
  "$1工場のホームページ": [
    "自動車",
    "ロボット",
    "アンドロイド",
    "スマートフォン",
    "PC",
    "パスタ",
    "マカロン",
  ],
  "架空の$1のHP": [
    "町",
    "俳優",
    "歌手",
    "写真家",
    "ギタリスト",
    "国の大使館",
  ],
};

function createOdai(odais: Odai) {
  const keys = Object.keys(odais);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const value = odais[key];
  const odai = value[Math.floor(Math.random() * value.length)];
  return key.replace("$1", odai);
}

export default function OdaiGen() {
  const [odaiString, setOdaiString] = useState("---");
  return (
    <div class="flex gap-2 w-full border p-4">
      <p class="flex-grow-1 font-bold text-xl">{odaiString}</p>
      <Button onClick={() => setOdaiString(createOdai(odais))}>ランダム</Button>
    </div>
  );
}
