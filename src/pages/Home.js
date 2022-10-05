import Uploady from "@rpldy/uploady";
import React, { useState } from "react";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import { getMockSenderEnhancer } from "@rpldy/mock-sender";

const Home = () => {
  const mockSenderEnhancer = getMockSenderEnhancer({
    delay: 1500,
    progressIntervals: [20, 40, 75, 80, 90, 99],
  });
  const [storage, setStorage] = useState([]);

  return (
    <div>
      <h1>HOME</h1>
      <Uploady
        destination={{ url: "../public/images" }}
        enhancer={mockSenderEnhancer}
      >
        <UploadButton />
        <UploadPreview />
      </Uploady>
      ;
    </div>
  );
};

export default Home;
