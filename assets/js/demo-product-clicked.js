const products = {
    1: {
        images: [
            "Product-clicked-assets/product-1/fotor-ai-20240610175233.jpg",
            "Product-clicked-assets/product-1/fotor-ai-20240610175243.jpg",
            "Product-clicked-assets/product-1/fotor-ai-20240610175240.jpg",
            "Product-clicked-assets/product-1/fotor-ai-20240610175247.jpg",
            "Product-clicked-assets/product-1/fotor-ai-20240610175250.jpg"
        ]
    },
    2: {
        images: [
            "Product-clicked-assets/product-2/product-2-1.jpg",
            "Product-clicked-assets/product-2/product-2-2.jpg",
            "Product-clicked-assets/product-2/product-2-3.jpg",
            "Product-clicked-assets/product-2/product-2-4.jpg",
            "Product-clicked-assets/product-2/product-2-5.jpg",
            "Product-clicked-assets/product-2/product-2-6.jpg",
            "Product-clicked-assets/product-2/product-2-7.jpg"
        ]
    },
    3: {
        images: [
            "Product-clicked-assets/product-3/product-3-1.jpg",
            "Product-clicked-assets/product-3/product-3-2.jpg",
            "Product-clicked-assets/product-3/product-3-3.jpg",
            "Product-clicked-assets/product-3/product-3-4.jpg",
            "Product-clicked-assets/product-3/product-3-5.jpg",
            "Product-clicked-assets/product-3/product-3-6.jpg",
            "Product-clicked-assets/product-3/product-3-7.jpg",
            "Product-clicked-assets/product-3/product-3-8.jpg"
        ]
    },
    4: {
        images: [
            "Product-clicked-assets/product-4/product-4-1.jpg",
            "Product-clicked-assets/product-4/product-4-2.jpg",
            "Product-clicked-assets/product-4/product-4-3.jpg",
            "Product-clicked-assets/product-4/product-4-4.jpg",
            "Product-clicked-assets/product-4/product-4-5.jpg",
            "Product-clicked-assets/product-4/product-4-6.jpg"
        ]
    }       
};

$(function () {
    const urlParam = new URLSearchParams(window.location.search);
    const productID = urlParam.get('id');

    console.log(productID); // For debugging

    const product = products[productID];
    const grid = $('.my-masonry-grid');
    grid.empty();
    
    $('#product-hero').css('background-image', `url('Products_page_assets/product-${productID}.png')`);
    
    const video = $('#product-video-player');

    // Update the source attribute of the video
    video.find('source').attr('src', `Product-clicked-assets/product-${productID}/product-${productID}.mp4`);
    
    // Reload the video to apply the new source
    video.get(0).load();    

    if (product) {
        product.images.forEach((image, index) => {
            const height = 300 + (index * 20); // Example height calculation
            grid.append(`
                <div class="my-masonry-grid-item" style="height: ${height}px;">
                    <img id="collage-images" src="${image}" alt="Product Image" />
                </div>
            `);
        });
    } else {
        console.error('Product not found');
    }
});
