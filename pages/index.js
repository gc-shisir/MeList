import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

// import Navbar from "../comps/Navbar";
// import Footer from "../comps/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Member Listing | Home</title>
        <meta name="keywords" content="member" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello world</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam
          ratione sed voluptatibus quaerat. Mollitia asperiores ipsum porro
          corrupti ab repellendus non voluptates minima velit illum, accusantium
          quos quam sit?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          consequuntur magnam illum soluta optio accusamus placeat, cupiditate
          suscipit assumenda officiis. Labore laboriosam consequuntur placeat
          perspiciatis iusto eaque unde eveniet voluptatibus.
        </p>
        <Link href="/members">
          <a className={styles.btn}>View Listing</a>
        </Link>
      </div>
    </>
  );
}
