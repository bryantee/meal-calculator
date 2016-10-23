'use strict';

import dinners, {bryan, jesse, thomas} from "./mockData";
import Bill from "bill";

const theBill = new Bill (dinners);

theBill.printTotal();
theBill.printTips();
theBill.printBreakdown();
