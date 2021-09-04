import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Members.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

const Members = ({ users }) => {
  return (
    <>
      <Head>
        <title>Member Listing | List</title>
        <meta name="keywords" content="member" />
      </Head>
      <div>
        <h1>Members</h1>
        {users.map((user) => (
          <Link href={"/members/" + user.id} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Members;
