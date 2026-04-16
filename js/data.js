// Restaurant Data
const restaurants = [
    {
        id: 1,
        name: "Italian Delights",
        cuisine: "Italian",
        rating: 4.8,
        deliveryTime: "30-40 mins",
        address: "123 Plaza, Downtown",
        image: "https://images.unsplash.com/photo-1564379694568-e70de7e196e3?w=400&fit=crop"
    },
    {
        id: 2,
        name: "Dragon Palace",
        cuisine: "Chinese",
        rating: 4.6,
        deliveryTime: "25-35 mins",
        address: "456 Main Street",
        image: "https://images.unsplash.com/photo-1513818416499-51765355672f?w=400&fit=crop"
    },
    {
        id: 3,
        name: "Spice Kingdom",
        cuisine: "Indian",
        rating: 4.7,
        deliveryTime: "35-45 mins",
        address: "789 Curry Lane",
        image: "https://images.unsplash.com/photo-1505253585461-04db1267ae5e?w=400&fit=crop"
    },
    {
        id: 4,
        name: "Burger Barn",
        cuisine: "American",
        rating: 4.5,
        deliveryTime: "20-30 mins",
        address: "321 Fast Lane",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&fit=crop"
    },
    {
        id: 5,
        name: "Taco Fiesta",
        cuisine: "Mexican",
        rating: 4.4,
        deliveryTime: "30-40 mins",
        address: "654 Flavor Street",
        image: "https://images.unsplash.com/photo-1537036528160-85fa23f02c5b?w=400&fit=crop"
    },
    {
        id: 6,
        name: "Pasta Paradise",
        cuisine: "Italian",
        rating: 4.9,
        deliveryTime: "35-45 mins",
        address: "987 Noodle Road",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&fit=crop"
    }
];

// Menu Items Data
const menus = [
    // Italian Delights (Restaurant 1)
    {
        id: 1,
        restaurantId: 1,
        category: "Appetizers",
        name: "Garlic Bread",
        description: "Crispy bread with garlic butter and herbs",
        price: 120,
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64e4a?w=300&fit=crop"
    },
    {
        id: 2,
        restaurantId: 1,
        category: "Appetizers",
        name: "Bruschetta",
        description: "Toasted bread with tomato and basil",
        price: 150,
        image: "https://images.unsplash.com/photo-1577719643272-265f434b3b93?w=300&fit=crop"
    },
    {
        id: 3,
        restaurantId: 1,
        category: "Main Course",
        name: "Spaghetti Carbonara",
        description: "Creamy pasta with bacon and parmesan",
        price: 280,
        image: "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=300&fit=crop"
    },
    {
        id: 4,
        restaurantId: 1,
        category: "Main Course",
        name: "Lasagna",
        description: "Layered pasta with meat sauce and cheese",
        price: 300,
        image: "https://images.unsplash.com/photo-1599927056601-bc2c40e51b27?w=300&fit=crop"
    },
    {
        id: 5,
        restaurantId: 1,
        category: "Desserts",
        name: "Tiramisu",
        description: "Classic Italian dessert with cocoa",
        price: 180,
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=300&fit=crop"
    },

    // Dragon Palace (Restaurant 2)
    {
        id: 6,
        restaurantId: 2,
        category: "Appetizers",
        name: "Spring Rolls",
        description: "Crispy rolls with vegetable filling",
        price: 100,
        image: "https://images.unsplash.com/photo-1606787620081-a1c62b21cb68?w=300&fit=crop"
    },
    {
        id: 7,
        restaurantId: 2,
        category: "Appetizers",
        name: "Dumplings",
        description: "Steamed pork and vegetable dumplings",
        price: 120,
        image: "https://images.unsplash.com/photo-1608424277821-e1c6d8a0b8d0?w=300&fit=crop"
    },
    {
        id: 8,
        restaurantId: 2,
        category: "Main Course",
        name: "Kung Pao Chicken",
        description: "Spicy chicken with peanuts and vegetables",
        price: 250,
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&fit=crop"
    },
    {
        id: 9,
        restaurantId: 2,
        category: "Main Course",
        name: "Chow Mein",
        description: "Stir-fried noodles with vegetables and meat",
        price: 220,
        image: "https://images.unsplash.com/photo-1646069541408-9717a1e84e72?w=300&fit=crop"
    },

    // Spice Kingdom (Restaurant 3)
    {
        id: 10,
        restaurantId: 3,
        category: "Appetizers",
        name: "Samosa",
        description: "Fried pastry with spiced potato filling",
        price: 80,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&fit=crop"
    },
    {
        id: 11,
        restaurantId: 3,
        category: "Appetizers",
        name: "Pakora",
        description: "Fried vegetables in gram flour batter",
        price: 90,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&fit=crop"
    },
    {
        id: 12,
        restaurantId: 3,
        category: "Main Course",
        name: "Butter Chicken",
        description: "Tender chicken in creamy tomato sauce",
        price: 280,
        image: "https://images.unsplash.com/photo-1565557623814-975a47006121?w=300&fit=crop"
    },
    {
        id: 13,
        restaurantId: 3,
        category: "Main Course",
        name: "Biryani",
        description: "Fragrant rice with spiced meat",
        price: 250,
        image: "https://images.unsplash.com/photo-1585864299869-635b88abacd0?w=300&fit=crop"
    },

    // Burger Barn (Restaurant 4)
    {
        id: 14,
        restaurantId: 4,
        category: "Appetizers",
        name: "Chicken Wings",
        description: "Crispy wings with BBQ sauce",
        price: 180,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&fit=crop"
    },
    {
        id: 15,
        restaurantId: 4,
        category: "Main Course",
        name: "Classic Burger",
        description: "Beef patty with lettuce, tomato, and cheese",
        price: 200,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&fit=crop"
    },
    {
        id: 16,
        restaurantId: 4,
        category: "Main Course",
        name: "Double Cheeseburger",
        description: "Two beef patties with double cheese",
        price: 280,
        image: "https://images.unsplash.com/photo-1550547990-ba7f3a08d5b7?w=300&fit=crop"
    },
    {
        id: 17,
        restaurantId: 4,
        category: "Sides",
        name: "French Fries",
        description: "Golden crispy fries",
        price: 80,
        image: "https://images.unsplash.com/photo-1585238341710-4dd0c06f5a6f?w=300&fit=crop"
    },

    // Taco Fiesta (Restaurant 5)
    {
        id: 18,
        restaurantId: 5,
        category: "Main Course",
        name: "Beef Tacos",
        description: "Soft tortillas with seasoned beef",
        price: 160,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&fit=crop"
    },
    {
        id: 19,
        restaurantId: 5,
        category: "Main Course",
        name: "Chicken Quesadilla",
        description: "Grilled tortilla with chicken and cheese",
        price: 180,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&fit=crop"
    },
    {
        id: 20,
        restaurantId: 5,
        category: "Sides",
        name: "Guacamole & Chips",
        description: "Fresh avocado dip with tortilla chips",
        price: 120,
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64e4a?w=300&fit=crop"
    },

    // Pasta Paradise (Restaurant 6)
    {
        id: 21,
        restaurantId: 6,
        category: "Main Course",
        name: "Penne Arrabbiata",
        description: "Spicy tomato sauce with garlic",
        price: 260,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=300&fit=crop"
    },
    {
        id: 22,
        restaurantId: 6,
        category: "Main Course",
        name: "Fettuccine Alfredo",
        description: "Creamy pasta with fresh parmesan",
        price: 290,
        image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=300&fit=crop"
    },
    {
        id: 23,
        restaurantId: 6,
        category: "Main Course",
        name: "Ravioli Ricotta",
        description: "Cheese-filled ravioli with marinara sauce",
        price: 270,
        image: "https://images.unsplash.com/photo-1645112411341-6c4ee32510b8?w=300&fit=crop"
    }
];
