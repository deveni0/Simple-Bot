const handler = async (m, { conn }) => {

 return await conn.AIRich(m.chat, {
    text: "Welcome to our service! Check {{GITHUB}}github{{/GITHUB}} and {{GOOGLE}}google{{/GOOGLE}} for more info. Also visit {{YOUTUBE}}youtube{{/YOUTUBE}} for videos.",
    markdown: "**Bold text** and *italic text*\n- List item 1\n- List item 2\n==Highlighted text==",
    images: [
        "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg",
        "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg"
    ],
    videos: [
        { url: "https://example.com/video1.mp4", duration: 15 },
        { url: "https://example.com/video2.mp4", duration: 30 }
    ],
    code: {
        language: "python",
        blocks: [
            { content: "def", type: "KEYWORD" },
            { content: " greet(name):", type: "DEFAULT" },
            { content: "\n    return ", type: "DEFAULT" },
            { content: "'Hello '", type: "STR" },
            { content: " + name", type: "DEFAULT" },
            { content: "\n\nprint", type: "DEFAULT" },
            { content: "(", type: "DEFAULT" },
            { content: "greet('World')", type: "DEFAULT" },
            { content: ")", type: "DEFAULT" }
        ]
    },
    table: {
        rows: [
            { is_header: true, cells: ["Command", "Description", "Example"] },
            { is_header: false, cells: ["greet()", "Greet user", 'greet("Ahmed")'] },
            { is_header: false, cells: ["add()", "Add two numbers", "add(5, 3)"] },
            { is_header: false, cells: ["multiply()", "Multiply two numbers", "multiply(4, 2)"] }
        ]
    },
    products: [
        {
            title: "Smart Phone",
            brand: "TechBrand",
            price: "$999",
            salePrice: "$899",
            url: "https://example.com/phone",
            image: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg"
        },
        {
            title: "Wireless Headphones",
            brand: "AudioPro",
            price: "$199",
            salePrice: "$149",
            url: "https://example.com/headphones",
            image: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg"
        },
        {
            title: "Smart Watch",
            brand: "WearTech",
            price: "$299",
            salePrice: "$249",
            url: "https://example.com/watch",
            image: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg"
        }
    ],
    links: [
        { key: "GITHUB", url: "https://github.com", trusted: true },
        { key: "GOOGLE", url: "https://google.com", trusted: true },
        { key: "YOUTUBE", url: "https://youtube.com", trusted: false }
    ],
    citations: [
        {
            title: "Earth Facts",
            displayName: "NASA",
            url: "https://nasa.gov",
            subtitle: "Official NASA Website",
            favicon: "https://www.google.com/s2/favicons?domain=nasa.gov&sz=80"
        },
        {
            title: "Programming Guide",
            displayName: "GitHub",
            url: "https://github.com",
            subtitle: "Open Source Platform",
            favicon: "https://www.google.com/s2/favicons?domain=github.com&sz=80"
        }
    ],
    posts: [
        {
            title: "Beautiful Sunset",
            subtitle: "Nature Photography",
            username: "nature_lover",
            profilePic: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg",
            verified: true,
            thumbnail: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg",
            caption: "Amazing sunset view!",
            likes: 1200,
            comments: 45,
            shares: 90,
            url: "https://instagram.com/p/123",
            source: "INSTAGRAM",
            footerLabel: "IG",
            orientation: "PORTRAIT",
            type: "PHOTO"
        },
        {
            title: "Mountain Hike",
            subtitle: "Adventure Travel",
            username: "adventure_time",
            profilePic: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg",
            verified: false,
            thumbnail: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg",
            caption: "Hiking in the mountains",
            likes: 800,
            comments: 30,
            shares: 60,
            url: "https://instagram.com/p/456",
            source: "INSTAGRAM",
            footerLabel: "IG",
            orientation: "LANDSCAPE",
            type: "PHOTO"
        }
    ],
    reels: [
        {
            creator: "tech_creator",
            title: "Coding Tips",
            thumbnail: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg",
            avatar: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg",
            likes: 1500,
            views: 25000,
            shares: 120,
            verified: true,
            source: "IG"
        },
        {
            creator: "funny_cat",
            title: "Funny Cat Video",
            thumbnail: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg",
            avatar: "https://i.pinimg.com/736x/66/5a/1b/665a1be7d454f35dfa47cf63273d90fc.jpg",
            likes: 2300,
            views: 42000,
            shares: 340,
            verified: false,
            source: "IG"
        }
    ],
    searchResults: [
        {
            title: "OpenAI",
            displayName: "OpenAI",
            subtitle: "AI Research Lab",
            url: "https://openai.com",
            favicon: "https://www.google.com/s2/favicons?domain=openai.com&sz=80"
        },
        {
            title: "GitHub",
            displayName: "GitHub",
            subtitle: "Code Repository",
            url: "https://github.com",
            favicon: "https://www.google.com/s2/favicons?domain=github.com&sz=80"
        },
        {
            title: "Stack Overflow",
            displayName: "Stack Overflow",
            subtitle: "Programming Q&A",
            url: "https://stackoverflow.com",
            favicon: "https://www.google.com/s2/favicons?domain=stackoverflow.com&sz=80"
        }
    ],
    hashtag: ["#programming", "#coding", "#python", "#tutorial", "#learning"],
    sections: [
        {
            view_model: {
                primitive: { text: "📝 Custom Section", __typename: "GenAIMetadataTextPrimitive" },
                __typename: "GenAISingleLayoutViewModel"
            }
        },
        {
            view_model: {
                primitive: { text: "🔹 Another Custom Section", __typename: "GenAIMetadataTextPrimitive" },
                __typename: "GenAISingleLayoutViewModel"
            }
        }
    ],
    responseId: "my_custom_response_id"
});

};

handler.command = ['مثال6'];
export default handler;