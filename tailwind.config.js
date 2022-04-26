module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}" ,'./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        "cart-icon": "url('/src/img/cart.png')",
        "fav-icon": "url('/src/img/fav.png')",
        "like-icon": "url('/src/img/like.webp')",
        "share-icon": "url('/src/img/share.webp')",
        "star-orange-icon":"url('/src/img/star-orange.webp')",
        "star-gray-icon":"url('/src/img/star-gray.png')",

        "profile1-pic": "url('/src/img/hrk.png')",
        "profile2-pic": "url('/src/img/bot.png')",
        "profile3-pic": "url('/src/img/colorful.jpg')",

        "keyboard1-pic": "url('/src/img/key1.png')",
        "keyboard2-pic": "url('/src/img/key2.png')",
        "keyboard3-pic": "url('/src/img/key3.jpg')",
        "keyboard4-pic": "url('/src/img/key4.jpg')",
        "keyboard5-pic": "url('/src/img/key5.jpg')",
        "keyboard6-pic": "url('/src/img/key6.jpg')",
        "keyboard7-pic": "url('/src/img/key7.jpg')",
        "keyboard8-pic": "url('/src/img/key8.webp')",
        "keyboard9-pic": "url('/src/img/key9.jpg')",
      },
      colors: {
        "bg-color": "#082032",
        "bg-profile": "#334756",
        "navbar-color": "#2C394B",
        "navbar-ptr-color": "#F0A500",
        "sub-title-color":"#C4C4C4",
      },
      
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
