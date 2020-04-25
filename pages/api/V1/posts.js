import axios from 'axios'

export default async (req, res) => {

    if (req.method === "POST"){
        //body parser for body
        const postData = JSON.parse(req.body)
        console.log(postData)

        return res.json({
            status: "Saving Post to Db",
            ...postData
        })
    } else {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const posts = response.data

        return res.json(posts.slice(0, 20))
    }
}

