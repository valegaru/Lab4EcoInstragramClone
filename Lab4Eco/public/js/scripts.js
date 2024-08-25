document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());

	try {
		const response = await fetch('/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			window.location.href = 'index.html';
		} else {
			alert('Registration failed. Try a different username.');
		}
	} catch (error) {
		console.error('Error:', error);
	}
});

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());

	try {
		const response = await fetch('/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			window.location.href = 'create-post.html';
		} else {
			alert('Login failed. Check your username and password.');
		}
	} catch (error) {
		console.error('Error:', error);
	}
});

document.getElementById('createPostForm')?.addEventListener('submit', async (e) => {
	e.preventDefault();
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());

	try {
		const response = await fetch('/create-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			alert('Post created successfully!');
			e.target.reset(); // Limpiar los campos del formulario
		} else {
			alert('Failed to create post.');
		}
	} catch (error) {
		console.error('Error:', error);
	}
});

//window.locate.href = ""
