// Returns typeof Object compliant with ora/spinner
// {
//   frames = typeof String containing random digits and numbers (ex. 'abC123')
//   interval = typeof Number determining setinterval (ex. 80)
// }

export default function getRandomChars(length) {
  let spinner = {
    frames: [],
    interval: 80
  };
  for (let i = 1; i <= length; i++) spinner.frames.push("");
  spinner.frames = spinner.frames.map(item => {
    return Math.random() >= 0.5
      ? [...Array(length)].map(() => Math.random().toString(36)[2]).join("")
      : [...Array(length)]
          .map(() => Math.random().toString(36)[2])
          .join("")
          .toUpperCase();
  });
  return spinner;
}
