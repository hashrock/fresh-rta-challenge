import { Head } from "$fresh/runtime.ts";
import OdaiGen from "../islands/OdaiGen.tsx";
import IconClock2 from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/clock-2.tsx";

const usefulSites = [
  { name: "Fresh公式", url: "https://fresh.deno.dev/" },
  { name: "Deno Deploy", url: "https://deno.com/deploy" },
  { name: "Fresh Components", url: "https://fresh.deno.dev/components" },
  { name: "TSX Tabler Icons", url: "https://tabler-icons-tsx.deno.dev/" },
  { name: "Unsplash", url: "https://unsplash.com/ja" },
  { name: "Lorem JPsum", url: "https://lorem-jpsum.vercel.app/" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh RTA</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md space-y-16">
        <h1 class="text-4xl font-bold flex items-center">
          <IconClock2 class="inline-block w-10 h-10 mr-2" />
          <div>
            Fresh Web制作RTA
          </div>
        </h1>

        <article>
          <h2 class="text-lg my-4 font-bold">
            なにこれ
          </h2>
          <p>
            FreshでWebサイトを作る速度を競うRTA(Real Time Attack)です。<br />
            (完成の定義ができなそうなのであくまでお遊び企画です)
          </p>
        </article>
        <OdaiGen />

        <article>
          <h2 class="text-lg my-4 font-bold">
            レギュレーション
          </h2>
          <ul class="list-disc list-inside">
            <li>お題を生成してから完成するまで</li>
            <li>見届人が「このサイトはありそう」と承認したら完成</li>
            <li>細かい文章などは評価対象にしない（Lorem IpsumでOK）</li>
            <li>タブでWebサイトを開いておく準備などはOK</li>
          </ul>
        </article>

        <article>
          <h2 class="text-lg my-4 font-bold">
            便利なサイト
          </h2>
          <p>
            <ul class="list-disc list-inside">
              {usefulSites.map((site) => (
                <li>
                  <a
                    class="text-blue-500 underline hover:text-blue-700"
                    href={site.url}
                  >
                    {site.name}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        </article>

        <article>
          <h2 class="text-lg my-4 font-bold">
            About
          </h2>
          <p>
            <a
              class="text-blue-500 underline hover:text-blue-700"
              href="https://github.com/hashrock/fresh-rta-challenge"
            >
              GitHub
            </a>
          </p>
        </article>
      </div>
    </>
  );
}
