import fetch from "node-fetch";

const basePath = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
  const response = await fetch(`${basePath}?_limit=5`);
  return response.json();
}

export async function getPost(id) {
  if (id === undefined || id === null) {
    throw "id required";
  }
  const response = await fetch(`${basePath}/${id}`);
  return await response.json();
}

export async function getPostIdList() {
  const posts = await getPosts();
  return posts.map((post) => {
    const { id } = post;
    // returned format must looks like this:
    return {
      params: {
        id: id.toString(),
      },
    };
  });
}
