class Comment {
    post_id = '';
    user_id = '';
    content = '';
    username = '';
    api_url = 'https://62dc64224438813a261591e3.mockapi.io';

    create() {
        let data = {
            post_id: this.post_id,
            user_id: this.user_id,
            content: this.content,
            username: this.username
        }

        data = JSON.stringify(data);

        fetch(this.api_url + '/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then(response => response.json())
        .then(data => {
            alert('Postavljen komentar');
        })
    }

    async get(post_id) {
        let api_url = this.api_url + '/comments';

        let response = await fetch(api_url);
        let data = await response.json();
        let post_comments = [];

        let i = 0;
        data.forEach(item => {
            if (item.post_id === post_id) {
                post_comments[i] = item;
                i++
            }
        });

        return post_comments;
    }
}