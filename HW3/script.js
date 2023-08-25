let app = Vue.createApp({
    data: () => {
        return {
            posts: [],
            username: "",
            message: "",
        };
    },
    methods: {
        addPost() {
            const newPost = {
                username: this.username,
                message: this.message,
                textColor: "#000",
                backgroundColor: "#FFF",
                fontSizePx: 16,
                fontFamily: "Arial",
                isBold: false,
                isItalic: false,
                isEditing: false,
            };
            this.posts.push(newPost);
        },
        editPost(index) {
            this.posts.forEach((post, i) => {
                if (i === index) {
                    post.isEditing = true;
                } else {
                    post.isEditing = false;
                }
            });
        },
        saveChanges(index) {
            this.posts[index].isEditing = false;
        },
        getPostStyle(post) {
            return {
                color: post.textColor,
                background: post.backgroundColor,
                fontSize: post.fontSizePx + 'px',
                fontWeight: post.isBold ? "bold" : "normal",
                fontStyle: post.isItalic ? "italic" : "normal",
                fontFamily: post.fontFamily,
            };
        },
        updatePostText(index, event) {
            this.posts[index].message = event.target.value;
        },
    },
});
app.mount("#app");


