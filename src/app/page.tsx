import Banner from "@/ui/Banner";
import BasicProducts from "@/ui/BasicProducts";
import Clients from "@/ui/Clients";
import CoreServices from "@/ui/CoreServices";
import HighPerformance from "@/ui/HighPerformance";
import Projects from "@/ui/Projects";
import WhatWeDo from "@/ui/WhatWeDo";
import PickServices from "@/ui/services/PickServices";

export default function Home() {
  return (
    <main>
      <Banner />
      <PickServices />
      <CoreServices />
      <Clients />
      <WhatWeDo />
      <BasicProducts />
      <HighPerformance />
      <Projects />
    </main>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9393520954659937"
     crossorigin="anonymous"></script>
  );
}
