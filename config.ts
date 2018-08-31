import { Injectable } from '@angular/core';

@Injectable()
export class FBConfig {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyBdwYvP7hhZYNXyAXvr7UVmJcg8sizkXFQ",
		authDomain: "v4-dev-73577.firebaseapp.com",
		databaseURL: "https://v4-dev-73577.firebaseio.com",
		projectId: "v4-dev-73577",
		storageBucket: "v4-dev-73577.appspot.com",
		messagingSenderId: "941043654409"
	}
};
