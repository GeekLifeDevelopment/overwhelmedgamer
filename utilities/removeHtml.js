export default function removeHtmlTags(input) {
  return input.replace(/<[^>]*>/g, "");
}

//   const htmlString = "";

//   const textWithoutTags = removeHtmlTags(htmlString);
//   console.log(textWithoutTags);
