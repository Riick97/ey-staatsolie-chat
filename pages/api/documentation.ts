import type { NextApiRequest, NextApiResponse } from "next";

const changeLogMD = require("../../documentation/changelog.md").default;


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Return the file contents as a response
    res.status(200).send(changeLogMD);
  } catch (error) {
    console.error(`Error reading the file: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};