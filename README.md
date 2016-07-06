# React Rating Stars
React component to rate through stars
> Facebook React Component

## Add it to your project

1. Run ```npm install react-rating-stars --save````
2. Import ``` import RatingStars from "react-rating-stars";```
3. Require ``` var RatingStars require("react-rating-stars");```
## How to apply?

```javascript
const stars = 5; //Number of stars
const changeRating = () => true; //Callback on change

<RatingStars stars={stars} onChange={changeRating} />
```
