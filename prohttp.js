function proHttp(url) {
  return new Promise((resolve, reject) => {
    this.http = new XMLHttpRequest();

    this.http.open("GET", url, true);

    this.http.onload = () => {
       
      if (this.http.status === 200) {
        const joke = this.http.responseText;
        resolve(joke);
      } else {
        reject(this.http.status);
      }
    };
    this.http.send();
  });
}
