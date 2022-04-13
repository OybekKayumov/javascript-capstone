const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appID = 'Ngyhlqhta3I7behhBDEq';

const addLike = async (id) => {
  const connectLink = await fetch(`${baseURL}${appID}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });

  const response = await connectLink.text();
  return response;
};

const getLike = async () => {
  const connectLink = await fetch(`${baseURL}${appID}/likes`);
  const response = await connectLink.json();
  return response;
};

const updateLikes = () => {
  getLike(appID).then((response) => {
    response.forEach((elem) => {
      const wrapper = document.getElementById(`${elem.item_id}`);

      wrapper.innerHTML = `${elem.likes} Likes`;
    });
  });
};

export { addLike, updateLikes };