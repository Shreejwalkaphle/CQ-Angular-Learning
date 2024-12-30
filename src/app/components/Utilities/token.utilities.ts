export class  TokenUtility{
  saveTokenToLocalStorage(token: string) {
    localStorage.setItem('Shreejwal-Jwt-Token', token);
  }
  getTokenFromLocalStorage() {
    return localStorage.getItem('Shreejwal-Jwt-Token');
  }
}