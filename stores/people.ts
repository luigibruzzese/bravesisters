import {useFetch} from "#app";
import init from "@parcel/watcher-wasm";
import type {integer} from "vscode-languageserver-types";

interface Person {
    id: number,
    name:string,
    surname:string,
    role: string,
    description: string
}

export const usePeopleStore = defineStore('person',()=>{
    const people = reactive([] as Person[])
    async function init() {
        const {data} = await useFetch<any[]>('/api/people')
        const list = data.value
        if(list!=null) {
            people.splice(0,people.length)  //Clear the list
            people.push(...list)
        }
    }

    init()

    return {people}
})

