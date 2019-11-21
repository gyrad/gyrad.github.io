/* const blogposts = document.getElementById('recent-blogposts');

const data = fetch('http://blog.tenzinggaychey.com/wp-json/wp/v2/posts')
  .then(response => response.json())
  .then(posts => {
    blogposts.innerHTML += `<ul style="list-style: none; margin: 0; padding: 0;">`;
    posts.forEach(post => {
      blogposts.innerHTML += `<li style="list-style: none;"><a href="${
        post.link
      }">${post.title.rendered}</a></li>`;
    });
    blogposts.innerHTML += `</ul>`;
  });
 */
