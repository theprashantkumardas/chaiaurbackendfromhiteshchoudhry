// const asyncHandler = () => {}

/*Method 2 for handling err */
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};

export { asyncHandler };



/* method 1 for handling err */

// const asyncHandler = (fn) => async (req, res, next){ 
//     try {
//         await fn(req, res, next)
//     }
//     catch (error) {
//         res.status(err.code || 5000).json ({
//             success: false,
//             message: err.message
//         })
//     }
// }