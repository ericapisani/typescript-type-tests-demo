import { expectType } from "tsd";
import { add } from "./src/index";

expectType<String>(add("foo", "bar"));
expectType<Number>(add(2, 4));
