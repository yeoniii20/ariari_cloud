import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../api/common";

const Redirection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Redirection component mounted");

    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (!code) {
      console.error("No authorization code found in URL.");
      return;
    }

    console.log(`Authorization code: ${code}`);

    localStorage.setItem("auth_code", code);

    postData(code);
  }, [navigate]);

  const postData = async (code) => {
    const inputURL = `${API_URL}/login?code=${code}`;
    console.log(inputURL);

    try {
      const response = await axios.get(inputURL, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log("response.data >>>", response.data);

      const { accessToken } = response.data.accessToken;
      if (accessToken) {
        localStorage.setItem("jwt", accessToken);
        console.log("JWT Token:", accessToken);

        // 페이지 이동
        navigate("/mypage");
      } else {
        console.error("JWT token not found in the response");
      }
    } catch (error) {
      console.error("Failed to fetch JWT:", error);
    }
  };

  return <div>로그인 중입니다...</div>;
};

export default Redirection;
