import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from "../components/dashboard/Loader";

export default function Home() {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  useEffect(() => {
    if (!user) router.push("/authentication/signin");
    else router.push("/dashboard/listing");
  }, []);

  return (
    <>
      <Loader />
    </>
  );
}
