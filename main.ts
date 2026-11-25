// Small CLI for the make.fun autocorrect contest entry.
const LINE =
  'Autocorrect changed my on my way to on my waaaaa and honestly it was more accurate.';
const argv = process.argv.slice(2);

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return argv.includes(flag);
}

function main(): void {
  if (hasFlag('--help')) {
    process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
