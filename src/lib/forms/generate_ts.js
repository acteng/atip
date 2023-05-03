import { argv } from "node:process";
import * as fs from "fs";

let schema = JSON.parse(fs.readFileSync(argv[2], { encoding: "utf8" }));
let queue = [schema];
let seen = new Set();

while (queue.length > 0) {
  generate(queue.pop());
}

function generate(field) {
  if (seen.has(field.name)) {
    throw new Error(`The schema uses ${field.name} as a type name twice`);
  }
  seen.add(field.name);

  if ("members" in field) {
    // Struct
    console.log(`export interface ${field.name} {`);
    for (let member of field.members) {
      if ("type" in member) {
        if (member.type == "number") {
          console.log(`  ${member.name}?: number;`);
        } else if (member.type == "one-liner") {
          console.log(`  ${member.name}?: string;`);
        }
      } else {
        queue.push(member);
        console.log(`  ${member.name}?: ${member.name};`);
      }
    }
    console.log(`}\n`);
  } else if ("oneOf" in field) {
    // Enum
    let cases = [];
    for (let x of field.oneOf) {
      if (x.name) {
        cases.push(x.name);
        queue.push(x);
      } else {
        cases.push(`"${x}"`);
      }
    }
    console.log(`export type ${field.name} = ${cases.join(" | ")};\n`);
  } else {
    throw new Error(`Unknown field ${JSON.stringify(field)}`);
  }
}
