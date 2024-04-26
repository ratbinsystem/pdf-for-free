export default (fn) => {
    try {
        fn();
    } catch (error) {
        console.log(error);
    }
}