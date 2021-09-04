import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  // initialize the hook and store the result of that hook inside a variable
  // it returns a router object which contains method to redirect a user
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // console.log(router)  //prints an object with different methods in it
      // router.back()  //goes to previous page
      router.push('/') //it redirects to home route.
    }, 1000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops</h1>
      <h2>The page you requested cannot be found</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a
            style={{
              background: "#4979FF",
              color: "white",
              borderRadius: 8,
              padding: 5,
            }}
          >
            HomePage
          </a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
