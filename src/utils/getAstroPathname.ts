export default function getPathname(currentPathname: string) {
  let pathname = "";
  if (currentPathname.endsWith("/index.html")) {
    pathname = currentPathname.substring(
      0,
      currentPathname.lastIndexOf("index.html")
    );
  } else {
    pathname = currentPathname;
  }
  return pathname;
}