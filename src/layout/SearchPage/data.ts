export default {
    "count": 5,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "title": "Spaghetti Carbonara",
            "author": 101,
            "category": 1,
            "image": "https://example.com/images/carbonara.jpg",
            "likes_count": "150",
            "saves_count": "75"
        },
        {
            "id": 2,
            "title": "Chicken Tikka Masala",
            "author": 102,
            "category": 2,
            "image": "https://example.com/images/tikka_masala.jpg",
            "likes_count": "200",
            "saves_count": "100"
        },
        {
            "id": 3,
            "title": "Sushi",
            "author": 103,
            "category": 3,
            "image": "https://example.com/images/sushi.jpg",
            "likes_count": "250",
            "saves_count": "150"
        },
        {
            "id": 4,
            "title": "Tacos",
            "author": 104,
            "category": 4,
            "image": "https://example.com/images/tacos.jpg",
            "likes_count": "180",
            "saves_count": "90"
        },
        {
            "id": 5,
            "title": "Beef Stroganoff",
            "author": 105,
            "category": 5,
            "image": "https://example.com/images/beef_stroganoff.jpg",
            "likes_count": "120",
            "saves_count": "60"
        }
    ]
}

export interface ICard {
    id: number,
    title: string,
    author: number,
    category: number,
    image: string,
    likes_count: string,
    saves_count: string,
}