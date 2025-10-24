export default {
    mounted(el, binding) {
        let isLoaded = false;

        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };

        const callback = (entries) => {

            if (entries[0].isIntersecting && !isLoaded) {
                isLoaded = true;
                binding.value();

                setTimeout(() => {
                    isLoaded = false;
                }, 1000);
            }
        };

        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
        el._observer = observer;
    },
    unmounted(el) {
        if (el._observer) {
            el._observer.disconnect();
        }
    },
    name: 'intersection'
}