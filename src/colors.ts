export const colors = {
  // https://colorbrewer2.org/#type=qualitative&scheme=Set1&n=4
  area: "#D94324",
  route: "#555F5E",
  crossing: "#4daf4a",
  other: "#984ea3",

  hovering: "black",
  streetview: "blue",
  measuringLine: "cyan",
};

// For points
export const circleRadius = 10;
// For line-strings
export const lineWidth = 10;

export function randomSchemeColor(): string {
  return pickRandom(["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"]);
}

function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
