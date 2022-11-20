import { Head } from "$fresh/runtime.ts";
import OdaiGen from "../islands/OdaiGen.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh RTA</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md space-y-16">
        <h1 class="text-2xl font-bold">Fresh Web制作RTA</h1>

        <article>
          <h2 class="text-lg my-4 font-bold">
            なにこれ
          </h2>
          <p>
            FreshでWebサイトを作る速度を競うRTA(Real Time Attack)です。
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
              <li>
                <a
                  class="text-blue-500 underline"
                  href="https://fresh.deno.dev/"
                >
                  Fresh公式
                </a>
              </li>
              <li>
                <a
                  class="text-blue-500 underline"
                  href="https://fresh.deno.dev/components"
                >
                  Fresh Components
                </a>
              </li>
              <li>
                <a
                  class="text-blue-500 underline"
                  href="https://tabler-icons-tsx.deno.dev/"
                >
                  TSX Tabler Icons
                </a>
              </li>
              <li>
                <a
                  class="text-blue-500 underline"
                  href="https://unsplash.com/ja"
                >
                  Unsplash
                </a>
              </li>
              <li>
                <a
                  class="text-blue-500 underline"
                  href="https://lorem-jpsum.vercel.app/"
                >
                  Lorem JPsum
                </a>
              </li>              
            </ul>
          </p>
        </article>
      </div>
    </>
  );
}
