var posts=["2024/11/17/hello-world/","2024/11/17/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };