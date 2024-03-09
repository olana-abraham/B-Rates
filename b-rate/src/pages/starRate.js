// import React from "react";
// import {FaStar} from "react-icons/fa"
// import { useEffect, useState } from "react"

// export default function StarRate() {
//     const [rating, setRating] = useState(null)
//     const [rateColor, setColor] = useState(null)
//     return (
//         <>
//             {[...Array(5)].map((star, index) => {
//                 const currentRate = index + 1
//                 return (
//                     <>
//                         <label>
//                         <input type="radio" name="rate"
//                         value = {currentRate}
//                         onClick = {() => setRating(currentRate)}
//                         />
//                         <FaStar size={35}
//                         color={currentRate <= (rateColor || rating) ? "yellow" : "grey" } />
//                         </label>
//                     </>
//                 )
//             })}
//         </>
//     )
// }
