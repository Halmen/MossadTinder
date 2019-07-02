import Datastore from "react-native-local-mongodb";
import { getBlackList, getLastSession } from "../actions/databaseActions";

const initialStates = {
  name: "lastSessionRows",
  unswiped: []
};
const db = new Datastore({ filename: "asyncStorageKey", autoload: true });

export const setLastSession = () => {
  return async dispatch => {
    try {
      db.find({ name: "lastSessionRows" }, (err, lastSessionData) => {
        if (!err) {
          if (lastSessionData === undefined || lastSessionData.length == 0) {
            db.insert(initialStates);
          } else {
            dispatch(getLastSession(lastSessionData[0].unswiped));
          }
        } else console.log(err);
      });
    } catch (error) {
      console.log(error);
    }
  };
};
