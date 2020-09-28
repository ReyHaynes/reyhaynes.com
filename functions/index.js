const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()
const db = admin.firestore()
const { Timestamp } = admin.firestore

const updatePublicPosts = async () => {
    const posts = await db.collection('posts').orderBy("timestamp", "desc").limit(5).get()
    const publicRef = db.doc('posts/_public_')
    return publicRef.set({
        posts: posts.docs.map(post => post.data())
    })
}

exports.whenPostsAreCreated = functions.firestore
    .document('posts/{postId}')
    .onCreate(async (_, context) => {
        const { postId } = context.params

        if (postId === '_public_') return

        const postRef = db.doc(`posts/${postId}`)

        await postRef.update({
            timestamp: Timestamp.now()
        })

        await updatePublicPosts()
    })

exports.whenPostsAreDeleted = functions.firestore
    .document('posts/{postId}')
    .onDelete(async () => {
        await updatePublicPosts()
    })