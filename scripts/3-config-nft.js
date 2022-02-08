import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x0d007dCcda56aa6377D31FA898AD4B7799D9C8Dc",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Alpha Carrot",
        description: "This NFT will give you access to CarrotPersonDAO!",
        image: readFileSync("scripts/assets/alpha_carrot.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()