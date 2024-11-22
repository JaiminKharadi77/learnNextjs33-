import { ImageSlider } from "@/components/image-slider";
import { serverSideFunction } from "@/utils/server-utils";
// import { clientSideFunction } from "@/utils/client-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();

  // console.log(clientSideFunction());
  return (
    <>
      <h1>Server Route</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
