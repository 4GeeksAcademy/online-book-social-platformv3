const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null, 
			cb_url: "https://crob001-legendary-parakeet-r99xj94554xhxr6j-3001.preview.app.github.dev",
			dummydata: [
				{
					"Title": "Discussion Title 1",
					"id": 1,
					"UserID": 2, 
					"description": "description",
					"comments": [
						{
							"discussionID": 1,
							"UserID": 1,
							"comment": "example comment"
						}, 
						{
							"discussionID": 1,
							"UserID": 2,
							"comment": "example comment"
						}, 
					] 
				}, 
				{
					"Title": "Discussion Title 2",
					"id": 2,
					"UserID": 1, 
					"description": "description",
					"comments": [
						{
							"discussionID": 2,
							"UserID": 1,
							"comment": "example comment"
						}, 
						{
							"discussionID": 2,
							"UserID": 2,
							"comment": "example comment"
						}, 
					] 
				}
			], 
			users: [
				{
					"id": 1,
					"profileImage": "https://i.imgur.com/xeO4Qo2.png"
				}, 
				{
					"id": 2,
					"profileImage": "https://i.imgur.com/pSbtAu2.png"
				}
			]
		},
		actions: {
			login: async (email, password) => {
				const cb_url = getStore().cb_url
				const opts = {
				  method: "POST",
				  mode: "cors",
				  headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				  },
				  body: JSON.stringify({
					email: email,
					password: password,
				  }),
				};
				try {
				  const res = await fetch(cb_url + "/api/login", opts);
				//   if (res.status !== 200) {
				// 	alert("there has been an error");
				// 	return false;
				//   }
				  const data = await res.json();
				  sessionStorage.setItem("token", data.access_token);
				  setStore({ token: data.access_token});
				  return true;
				} catch (error) {console.error(error)}
			  },
			  createUser: async (name, email, password) => {
				const cb_url = getStore().cb_url
				const opts = {
				  method: "POST",
				  mode: "cors",
				  headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				  },
				  body: JSON.stringify({
					name: name,
					email: email,
					password: password,
				  }),
				};
				try {
				  const res = await fetch(cb_url + "/api/createUser", opts);
				  if (res.status !== 200) {
					alert("there has been an error");
					return false;
				  }
				  const data = await res.json();
				  // console.log(data);
				  if (data.status == "true") {
				  }
				  return true;
				} catch (error) {console.error(error);}
			  },

		}
	};
};

export default getState;
