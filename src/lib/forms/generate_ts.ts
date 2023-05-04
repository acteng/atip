import { argv } from "node:process";
import * as fs from "fs";
// TODO Normally we leave off the file extension, but ts-node config is somehow wrong
import {
  type Field,
  isStruct,
  isEnum,
  isOneLiner,
  isTextbox,
  isNumber,
  isCheckbox,
} from "./types.js";

// This script transforms a schema expressed in JSON into TypeScript types

let schema = JSON.parse(fs.readFileSync(argv[2], { encoding: "utf8" }));
// Queue contains all of the types to generate
let queue: Field[] = [schema];
let seen: Set<string> = new Set();

console.log(`// This file is auto-generated; do not manually edit\n`);
while (queue.length > 0) {
  generate(queue.pop()!);
}

function generate(field: Field) {
  if (seen.has(field.name)) {
    // We could also generate more detailed type names based on the nesting,
    // but this seems confusing
    throw new Error(`The schema uses ${field.name} as a type name twice`);
  }
  seen.add(field.name);

  if (isStruct(field)) {
    console.log(`export interface ${field.name} {`);
    for (let member of field.members) {
      if (isNumber(member)) {
        console.log(`  ${member.name}?: number;`);
      } else if (isOneLiner(member) || isTextbox(member)) {
        console.log(`  ${member.name}?: string;`);
      } else if (isCheckbox(member)) {
        console.log(`  ${member.name}?: boolean;`);
      } else if (isStruct(member) || isEnum(member)) {
        // TODO If it's an enum with all string cases, do we want another
        // explicitly named type or not?
        queue.push(member);
        console.log(`  ${member.name}?: ${member.name};`);
      } else {
        throw new Error(`Unknown field type ${member}`);
      }
    }
    console.log(`}\n`);
  } else if (isEnum(field)) {
    let cases = [];
    for (let x of field.oneOf) {
      if (typeof x == "string") {
        cases.push(`"${x}"`);
      } else {
        cases.push(x.name);
        queue.push(x);
      }
    }
    console.log(`export type ${field.name} = ${cases.join(" | ")};\n`);
  } else {
    throw new Error(`Unknown field ${JSON.stringify(field)}`);
  }
}
