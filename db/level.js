import { Level } from "level";
import { USER_DB, POST_DB } from "./constant";

const userDb = new Level("./db/userDb", { valueEncoding: "json" });
const postDb = new Level("./db/likeDb", { valueEncoding: "json" });

const message = ["Ce compte a été bloqué.", "email or password incorrect"];
let printedMessage = null;

const UpdateLike = async (key, id) => {
  try {
    const value = await get(USER_DB, key);
    value.LikedPic = [...value.LikedPic, id];
    console.log(value);
    await put(USER_DB, key, value);
  } catch (error) {
    throw new Error(error);
  } finally {
    printedMessage = null;
  }
};
const put = async (db, key, value) => {
  try {
    switch (db) {
      case USER_DB:
        const isBlocked = key === "muser3@gmail.com";
        await userDb.put(key, { ...value, isBlocked, LikedPic: [] });
        break;
      case POST_DB:
        await postDb.put(key, { ...value });
      default:
        break;
    }
  } catch (err) {
    throw err;
  } finally {
    printedMessage = null;
  }
};

const get = async (db, key, password = null) => {
  switch (db) {
    case USER_DB:
      try {
        const value = await userDb.get(key);
        if (value.isBlocked) {
          printedMessage = message[0];
          throw new Error();
        } else if (password && value.password !== password) {
          printedMessage = message[1];
          throw new Error();
        }
        return value;
      } catch (err) {
        if (printedMessage) throw new Error(printedMessage);
        throw new Error(err);
      } finally {
        printedMessage = null;
      }

    case POST_DB:
      try {
        await postDb.get(key, { ...value });
      } catch (error) {
        console.log(error);
      } finally {
        printedMessage = null;
      }
  }
};

export { put, get, UpdateLike };
