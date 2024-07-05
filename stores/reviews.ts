import {defineStore} from 'pinia';
import {ref, reactive} from "vue";
import {useFetch} from "#app";

interface Review {
    id: number;
    name: string;
    surname: string;
    date: string;
    comment: string;
    service: number;
}

export const useReviewStore = defineStore('review', () => {
    const review = reactive([] as Review[]);

    async function addReview(newReview: Review) {
        const body = JSON.stringify(newReview)
        const response = await fetch('/api/review', {method: 'POST', body})
        if (response.ok) review.push(newReview)
    }

    async function init() {
        const {data} = await useFetch<Review[]>('/api/review');
        const list = data.value;
        if (list) {
            review.splice(0, review.length);  // Clear the list
            review.push(...list);
        }
    }

    init()

    return {review, addReview};
});
