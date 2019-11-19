import { closestToZero } from "./closestToZero";
import { existsTypeAnnotation } from "@babel/types";

if (process.argv.length != 3) {
  console.log('usage: npm start \'-1,3,4,5,0,-2,-8\'');
} else {
  const input = process.argv[2].split(',').map((item) => {
    return parseInt(item, 10);
  });
  
  console.log(closestToZero(input));
}

