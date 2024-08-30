import { reactive } from "vue";

export const arrays = reactive ({
    navLinks: [
        { text: "Home", url: "#", active: true },
        { text: "Shop", url: "#", active: false },
        { text: "Blog", url: "#", active: false },
        { text: "Media", url: "#", active: false },
        { text: "ShortCode", url: "#", active: false },
        { text: "Features", url: "#", active: false },
      ]
})