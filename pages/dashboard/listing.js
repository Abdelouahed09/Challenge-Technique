import React, { useEffect, useState } from "react";
import PhotosListing from "../../components/dashboard/photosListing";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from "../../components/dashboard/Loader";

export default function Listing() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (!user?.email) router.push("/authentication/signin");
    else {
      setLoading(false);
    }
  }, [router, user?.email]);
  if (loading) return <Loader />;
  else if (!loading && user?.email) {
    return (
      <>
        <PhotosListing />
      </>
    );
  }
}
