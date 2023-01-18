const args = process.argv.slice(2);

let timer = function (args) {
  let orderedArgs = args.sort((a, b) => {
    return a - b
  });

  let delay = 0;
  for (let arg of orderedArgs) {
    if (arg > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay = (arg * 1000));
    }
  }
};

timer(args)
