const backgroundImages = [
    'https://images.unsplash.com/photo-1697658741356-b662d0389890?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1697201603529-e66b3cc04c1d?auto=format&fit=crop&q=80&w=3027&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682036654690-af8a6cfdfefe?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1694697413775-dfcd7966ab24?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1697621666147-5e607c3c4a38?auto=format&fit=crop&q=80&w=3013&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1697638332749-da3ba4046082?auto=format&fit=crop&q=80&w=2942&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1694250990115-ca7d9d991b24?auto=format&fit=crop&q=80&w=3095&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1687150434638-1925e0d656ab?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]



 function newImage(){
    const randomImageGen = Math.floor(Math.random() * backgroundImages.length)
    const selectedImage = backgroundImages[randomImageGen]
    document.body.style.backgroundImage = `url(${selectedImage})`

document.querySelector('#newBackground').addEventListener('click', newImage)
 }

 // Click Event Listener to our button to change the images

// const changeImageBtn = document.getElementById('newBackground');
// changeImageBtn.addEventListener('click', newImage);


const quote = document.getElementById("quote")
const author = document.getElementById("author")

const apiUrl = ''