import { combineReducers } from "redux";

import service from './service'
import singleservice from "./singleservice";
import packages from "./package";
import singlepackage from "./singlepackage";
import currentid from "./currentid";

export default combineReducers({ service, singleservice, packages, singlepackage, currentid })





