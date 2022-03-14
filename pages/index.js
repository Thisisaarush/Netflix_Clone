import Head from "next/head";
import styles from "../styles/Home.module.css";

// components
import { Banner } from "../components/Banner/Banner.component";
import { NavBar } from "../components/NavBar/NavBar.component";
import { SectionCards } from "../components/Card/SectionCards.components";

export default function Home() {
  const disneyVideos = [
    {
      id: 0,
      imgUrl: "/banner.jpg",
      size: "large",
    },
    {
      id: 1,
      imgUrl: "/banner.jpg",
      size: "large",
    },
    {
      id: 2,
      imgUrl: "/banner.jpg",
      size: "large",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Watch Movies/TV Shows and More" />
        <link rel="icon" href="/netflix.svg" />
      </Head>

      <main>
        <NavBar username="Thisisaarush" />
        <Banner
          title="Money Heist Season 5"
          subTitle="Watch the Bank Robbery Finale with a little bit of drama"
          imgUrl="/banner.jpg"
        />
        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} />
        </div>
      </main>
    </div>
  );
}
