import bcrypt from 'bcryptjs'

//i create first data.js for seed all datas into db
const data = {
    users: [
        {
            username: "Admin",
            email: "admin@admin.com",
            password: bcrypt.hashSync("admin"),
            isAdmin: true
        }
    ],

    blogs: [
        {
            title: "Blog One",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio praesentium iure sunt natus cum."
        },
        {
            title: "Blog Two",
            description: "Possimus optio praesentium iure sunt natus cum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio praesentium iure sunt natus cum."
        },
        {
            title: "Blog Three",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio praesentium iure sunt natus cum."
        },
        {
            title: "Blog Four",
            description: "Possimus optio praesentium iure sunt natus cum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio praesentium iure sunt natus cum."
        },
        {
            title: "Blog Five",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio praesentium iure sunt natus cum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus optio praesentium iure sunt natus cum."
        },
    ],
    products: [
        {
            title: "Product One",
            category: "Women",
            subcategory: "Dresses",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione saepe eius modi adipisci rem, dolorum sint neque in repellat tempore accusantium quas doloremque laborum ut magni corrupti deserunt odio earum.",
            price: 400,
            star: "4★",
            sizes: [
                {
                    title: "S"
                },
                {
                    title: "L"
                },
                {
                    title: "XL"
                },
            ],
            colors: [
                {
                    title: "Blue"
                },
                {
                    title: "Silver"
                },
                {
                    title: "White"
                }
            ],
            image: "./assets/images/products/1.0.webp",
            imageOne: "./assets/images/products/1.1.webp"
        },
        {
            title: "Product Two",
            category: "Women",
            subcategory: "Dresses",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione saepe eius modi adipisci rem, dolorum sint neque in repellat tempore accusantium quas doloremque laborum ut magni corrupti deserunt odio earum.",
            price: 799,
            star: "5★",
            sizes: [
                {
                    title: "XS"
                },
                {
                    title: "M"
                },
                {
                    title: "XL"
                },
            ],
            colors: [
                {
                    title: "Rose"
                },
            ],
            image: "./assets/images/products/1.2.webp",
            imageOne: "./assets/images/products/1.3.webp"
        },
        {
            title: "Product Three",
            category: "Men",
            subcategory: "Jacket",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione saepe eius modi adipisci rem, dolorum sint neque in repellat tempore accusantium quas doloremque laborum ut magni corrupti deserunt odio earum.",
            price: 1330,
            star: "5★",
            sizes: [
                {
                    title: "M"
                },
                {
                    title: "L"
                },
                {
                    title: "XL"
                },
                {
                    title: "XXL"
                }
            ],
            colors: [
                {
                    title: "White"
                },
                {
                    title: "Grey"
                }
            ],
            image: "./assets/images/products/1.4.webp",
            imageOne: "./assets/images/products/1.5.webp"
        },
        {
            title: "Product Four",
            category: "Men",
            subcategory: "T-Shirt",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione saepe eius modi adipisci rem, dolorum sint neque in repellat tempore accusantium quas doloremque laborum ut magni corrupti deserunt odio earum.",
            price: 120,
            star: "4★",
            sizes: [
                {
                    title: "S"
                },
                {
                    title: "M"
                },
                {
                    title: "L"
                },
                {
                    title: "XL"
                }
            ],
            colors: [
                {
                    title: "Black"
                }
            ],
            image: "./assets/images/products/1.6.webp",
            imageOne: "./assets/images/products/1.7.webp"
        },
        {
            title: "Product Five",
            category: "Men",
            subcategory: "Jeans",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione saepe eius modi adipisci rem, dolorum sint neque in repellat tempore accusantium quas doloremque laborum ut magni corrupti deserunt odio earum.",
            price: 130,
            star: "5★",
            sizes: [
                {
                    title: "30"
                },
                {
                    title: "31"
                },
                {
                    title: "32"
                },
                {
                    title: "34"
                }
            ],
            colors: [
                {
                    title: "Blue"
                }
            ],
            image: "./assets/images/products/1.8.webp",
            imageOne: "./assets/images/products/1.9.webp"
        }
    ],

    category: [
        {
            value: "Men",
            label: "Men"
        },
        {
            value: "Women",
            label: "Women"
        },
        {
            value: "Kids",
            label: "Kids"
        },
    ],

    subcategory: [
        {
            checked: false,
            label: 'Dresses'
        },
        {
            checked: false,
            label: 'Jeans'
        },
        {
            checked: false,
            label: 'T-Shirt'
        },
        {
            checked: false,
            label: 'Shorts'
        },
        {
            checked: false,
            label: 'Skirts'
        },
    ],

    rating: [
        {
            value: '1',
            label: "1★"
        },
        {
            value: '2',
            label: "2★"
        },
        {
            value: '3',
            label: "3★"
        },
        {
            value: '4',
            label: "4★"
        },
        {
            value: '5',
            label: "5★"
        }
    ]
}

export default data;