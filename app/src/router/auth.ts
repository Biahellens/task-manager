export default function isAuthenticated(): boolean {
  const authToken = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
  return authToken !== '';
}
