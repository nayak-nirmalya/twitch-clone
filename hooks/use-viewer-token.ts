import { toast } from "sonner";
import { useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";

export const useViewerToken = (hostIdentity: string) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [identity, setIdentity] = useState("");

  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await fetch;
      } catch (error) {
        toast.error("Something went wrong! Error creating token");
      }
    };
  }, []);
};
