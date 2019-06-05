// https://stackoverflow.com/a/21015393/10307226

// @param text: typeof String ('a')
// @param font: typeof String ('14px Source Code Pro')

// Returns typeof Number in rendered pixel width (ex. 14.215)

export default function getTextWidth(text, font) {
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");
  context.font = font;
  let metrics = context.measureText(text);
  console.log(context);
  console.log(metrics);
  return metrics.width;
}
