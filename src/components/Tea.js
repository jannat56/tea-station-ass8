const teas = [
    {
        tea: 'green tea',
        amount_of_tea: 500,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/tea_alt20_other/1800x1200_tea_alt20_other.jpg'
    },
   
    {
        tea: 'black tea',
        amount_of_tea: 600,
        tip: 0,
        category: 'best luxury',
        ratting : 4,
        img : 'https://vaya.in/recipes/wp-content/uploads/2018/02/Black-Tea.jpg'
    },
   
    {
        tea: ' ginger tea',
        amount_of_tea: 570,
        tip: 0,
        category: 'best luxury',
        ratting : 4,
        img : 'https://www.lifeisbetterwithtea.com/wp-content/uploads/2019/12/ginger_lemon_black_tea-square.jpeg'
    },
   
    {
        tea: 'masala tea',
        amount_of_tea: 900,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://image.shutterstock.com/image-photo/masala-tea-popularly-known-india-260nw-1706805625.jpg'
    },
   
    {
        tea: 'lemongrass tea',
        amount_of_tea: 900,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://www.industryglobalnews24.com/images/multiple-health-benefits-of-lemongrass-tea.jpeg'
    },
   
    {
        tea: 'ruer tea',
        amount_of_tea: 500,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://image.shutterstock.com/image-photo/chinese-tea-ruer-teapot-yixing-600w-766421737.jpg'
    },
   
    {
        tea: 'fruit tea',
        amount_of_tea: 560,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://www.gourmetgiftbaskets.com/Blog/wp-content/uploads/2015/7/fruit-tea-2015.jpg'
    },
   
    {
        tea: 'milk olong',
        amount_of_tea: 900,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeGVlb7gbWtfLvcF_IFhjT0VSvE5wdABH_Ajhfc0uC4iZxDDAFJkWmWsKIHzGGVwMpog&usqp=CAU'
    },
   
    {
        tea: 'black tea with milk',
        amount_of_tea: 390,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://i.dailymail.co.uk/i/pix/2015/02/27/20DA1E8100000578-0-image-a-2_1425072738280.jpg'
    },
   
    {
        tea: 'mate tea',
        amount_of_tea: 1000,
        tip: 0,
        category: 'best luxury',
        ratting : 5,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_cqJs3-Nq3oKEwpgm3BCcRO5n2C3o7Vr7CCJ4R5Cr4PQHjlJgDcS780yi0-pQNJHDPs&usqp=CAU'
    },
   
    {
        tea: 'hibiscus tea',
        amount_of_tea: 300,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://stylesatlife.com/wp-content/uploads/2019/09/Best-Hibiscus-Tea-Benefits-.jpg.webp'
    },
   
    {
        tea: 'chamomile tea',
        amount_of_tea: 500,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://post.healthline.com/wp-content/uploads/2020/09/chamomile-tea-thumb-1-732x549.jpg'
    },
   
    {
        tea: 'dogrose tea',
        amount_of_tea: 500,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://www.azernews.az/media/pictures/dog_rose.jpg'
    },
   
    {
        tea: 'rootbos tea',
        amount_of_tea: 500,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://images.theconversation.com/files/408616/original/file-20210628-27-194qwj0.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
    },
   
    {
        tea: 'green lemon tea',
        amount_of_tea: 500,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://image.shutterstock.com/image-photo/closeup-cup-green-tea-lemons-260nw-1362786326.jpg'
    },
   
    {
        tea: 'fruit milk tea',
        amount_of_tea: 500,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://image.shutterstock.com/image-photo/variety-color-bubble-tea-plastic-260nw-1227468910.jpg'
    },
   
    {
        tea: 'jug tea',
        amount_of_tea: 200,
        tip: 0,
        category: 'best luxury',
        ratting : 3.5,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4pyLUQCpskkk5XeZzOHvcWbiGK3tonXbfg&usqp=CAU'
    },
   
    {
        tea: 'rare tea',
        amount_of_tea: 800,
        tip: 0,
        category: 'best luxury',
        ratting : 4,
        img : 'https://s3-media0.fl.yelpcdn.com/bphoto/gFnnsT9BQpvSPeC8YFW39w/l.jpg'
    },
   
    {
        tea: 'fufu tea',
        amount_of_tea: 600,
        tip: 0,
        category: 'best luxury',
        ratting : 5,
        img : 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/tea_alt20_other/1800x1200_tea_alt20_other.jpg'
    },
   
    {
        tea: 'refresh tea',
        amount_of_tea: 230,
        tip: 0,
        category: 'best luxury',
        ratting : 5,
        img : 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/292160_2200-732x549.jpg'
    },
   
    {
        tea: 'nacho tea',
        amount_of_tea: 500,
        tip: 0,
        category: 'best luxury',
        ratting : 4.5,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIKXPQbVpped0ZMN0TzU-WQrb3C1UvPMmPw&usqp=CAU'
    },
   
    
   
]
