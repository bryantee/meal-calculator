'use strict';

import Bill from "./bill";
import dinners, {bryan, jesse, thomas} from "./mockData";

const theBill = new Bill (dinners);

theBill.printTotal();
theBill.printTips();
theBill.printBreakdown();
