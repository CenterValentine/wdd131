const reviewPageCounter = document.querySelector('.review-counter');
let numberOfReviews = Number(window.localStorage.getItem('numberOfReviews')) || 1;

console.log("reviewPageCounter", reviewPageCounter);

if (numberOfReviews === 1) {
    reviewPageCounter.textContent = `You have left a review!`;
}
else {
    reviewPageCounter.textContent = `You have left ${numberOfReviews} reviews!`;
};

