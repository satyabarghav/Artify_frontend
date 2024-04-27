import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize as useWindowSizeHook } from "@uidotdev/usehooks";
import axios from "axios"; // Import Axios

export default function Verified() {
  const [verified, setVerified] = useState(false);
  const { userId, token } = useParams();
  const size = useWindowSizeHook();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get(`http://localhost:2014/${userId}/verify/${token}`); // Use Axios to make the GET request

        if (response.status === 200) {
          setVerified(true);
        } else {
            setVerified(false)
          console.error("Verification failed:", response.statusText);
        }
      } catch (error) {
        setVerified(false)
        console.error("Error verifying user:", error);
      }
    };

    verifyUser();
  }, [userId, token]);

  return (
    <div>
      {verified && <Confetti width={size.width} height={size.height} />}
    </div>
  );
}
